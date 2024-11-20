"use client";

import { fonts } from "../../styles/global";
import { useEffect, useState } from "react";
import { colors, styled } from "secptrum-ui";

type HeadingType = {
  id: string;
  text: string;
  level: string;
};

const TableOfContents = () => {
  const [headings, setHeadings] = useState<HeadingType[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    const headings = headingElements.map((element) => ({
      id:
        element.id ||
        element?.textContent?.trim().toLowerCase().replace(/\s+/g, "-"),
      text: element.textContent,
      level: element.tagName,
    }));

    setHeadings(headings as HeadingType[]);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = headingElements.map((element) => ({
        id: element.id,
        offsetTop: element.getBoundingClientRect().top + scrollY,
      }));
      const activeSection = offsets.find(
        (offset, index) =>
          offset.offsetTop > scrollY &&
          (!offsets[index - 1] || offsets[index - 1].offsetTop <= scrollY)
      );

      setActiveId(activeSection?.id || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <ul className="toc">
        {headings &&
          headings?.map((heading) => (
            <li
              key={heading.id}
              className={`level-${heading.level.toLowerCase()}`}
            >
              <a
                href={`#${heading.id}`}
                className={activeId === heading.id ? "active" : ""}
              >
                {heading.text}
              </a>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default TableOfContents;

const Container = styled("nav")`
  position: sticky;
  top: 0;
  width: 250px;
  padding: 1rem;
  flex-shrink: 0;
  height: 100vh;
  background: ${(props) => props.theme.colors?.background};
  border-left: 1px solid ${(props) => props.theme.colors?.divider};

  @media screen and (max-width: 1024px) {
    display: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 3rem;
    font-weight: 400;
  }

  li {
    font-family: ${fonts.inter};
    font-weight: 400;
    font-size: 14px;
  }

  a {
    display: block;
    color: ${(props) => props.theme.colors?.body};
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;

    &:hover {
      color: ${(props) => props.theme.colors?.text};
    }
  }

  a.active {
    font-weight: 500;
    color: ${colors.blue[500]};
  }

  .level-h2 {
    padding-left: 0;
  }

  .level-h3 {
    padding-left: 1rem;
    position: relative;

    .active::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;
