import React from "react";

/**
 * Type definitions for HTML element props.
 * These types represent the properties that can be passed to various HTML elements in React.
 * They are based on the standard HTML attributes and React's synthetic event handlers.
 */

/**
 * Common props shared by most HTML elements
 */
export interface CommonProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  title?: string;
}

/**
 * Button element props
 */
export interface ButtonTypes
  extends CommonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Anchor element props
 */
export interface AnchorProps
  extends CommonProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}

/**
 * Input element props
 */
export interface InputProps
  extends CommonProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Textarea element props
 */
export interface TextareaProps
  extends CommonProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * Select element props
 */
export interface SelectProps
  extends CommonProps,
    React.SelectHTMLAttributes<HTMLSelectElement> {}

/**
 * Form element props
 */
export interface FormProps
  extends CommonProps,
    React.FormHTMLAttributes<HTMLFormElement> {}

/**
 * Image element props
 */
export interface ImageProps
  extends CommonProps,
    React.ImgHTMLAttributes<HTMLImageElement> {}

/**
 * Div element props
 */
export interface DivProps
  extends CommonProps,
    React.HTMLAttributes<HTMLDivElement> {}

/**
 * Span element props
 */
export interface SpanProps
  extends CommonProps,
    React.HTMLAttributes<HTMLSpanElement> {}

/**
 * Paragraph element props
 */
export interface ParagraphProps
  extends CommonProps,
    React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * List item element props
 */
export interface ListItemProps
  extends CommonProps,
    React.LiHTMLAttributes<HTMLLIElement> {}

/**
 * Unordered list element props
 */
export interface UnorderedListProps
  extends CommonProps,
    React.HTMLAttributes<HTMLUListElement> {}

/**
 * Ordered list element props
 */
export interface OrderedListProps
  extends CommonProps,
    React.OlHTMLAttributes<HTMLOListElement> {}

/**
 * Table element props
 */
export interface TableProps
  extends CommonProps,
    React.TableHTMLAttributes<HTMLTableElement> {}

/**
 * Table row element props
 */
export interface TableRowProps
  extends CommonProps,
    React.HTMLAttributes<HTMLTableRowElement> {}

/**
 * Table cell element props
 */
export interface TableCellProps
  extends CommonProps,
    React.TdHTMLAttributes<HTMLTableDataCellElement> {}

/**
 * Header element props
 */
export interface HeaderElementProps
  extends CommonProps,
    React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * Label element props
 */
export interface LabelProps
  extends CommonProps,
    React.LabelHTMLAttributes<HTMLLabelElement> {}

/**
 * Article element props
 */
export interface ArticleProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Section element props
 */
export interface SectionProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Nav element props
 */
export interface NavProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Aside element props
 */
export interface AsideProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Header element props
 */
export interface HeaderProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Footer element props
 */
export interface FooterProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Main element props
 */
export interface MainProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Address element props
 */
export interface AddressProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Audio element props
 */
export interface AudioProps
  extends CommonProps,
    React.AudioHTMLAttributes<HTMLAudioElement> {}

/**
 * Video element props
 */
export interface VideoProps
  extends CommonProps,
    React.VideoHTMLAttributes<HTMLVideoElement> {}

/**
 * Canvas element props
 */
export interface CanvasProps
  extends CommonProps,
    React.CanvasHTMLAttributes<HTMLCanvasElement> {}

/**
 * Embed element props
 */
export interface EmbedProps
  extends CommonProps,
    React.EmbedHTMLAttributes<HTMLEmbedElement> {}

/**
 * IFrame element props
 */
export interface IFrameProps
  extends CommonProps,
    React.IframeHTMLAttributes<HTMLIFrameElement> {}

/**
 * Object element props
 */
export interface ObjectProps
  extends CommonProps,
    React.ObjectHTMLAttributes<HTMLObjectElement> {}

/**
 * Picture element props
 */
export interface PictureProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Source element props
 */
export interface SourceProps
  extends CommonProps,
    React.SourceHTMLAttributes<HTMLSourceElement> {}

/**
 * Track element props
 */
export interface TrackProps
  extends CommonProps,
    React.TrackHTMLAttributes<HTMLTrackElement> {}

/**
 * Details element props
 */
export interface DetailsProps
  extends CommonProps,
    React.DetailsHTMLAttributes<HTMLDetailsElement> {}

/**
 * Dialog element props
 */
export interface DialogProps
  extends CommonProps,
    React.DialogHTMLAttributes<HTMLDialogElement> {}

/**
 * Menu element props
 */
export interface MenuProps
  extends CommonProps,
    React.MenuHTMLAttributes<HTMLMenuElement> {}

/**
 * Summary element props
 */
export interface SummaryProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Data element props
 */
export interface DataProps
  extends CommonProps,
    React.DataHTMLAttributes<HTMLDataElement> {}

/**
 * Time element props
 */
export interface TimeProps
  extends CommonProps,
    React.TimeHTMLAttributes<HTMLTimeElement> {}

/**
 * Var element props
 */
export interface VarProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Code element props
 */
export interface CodeProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Pre element props
 */
export interface PreProps
  extends CommonProps,
    React.HTMLAttributes<HTMLPreElement> {}

/**
 * Blockquote element props
 */
export interface BlockquoteProps
  extends CommonProps,
    React.BlockquoteHTMLAttributes<HTMLQuoteElement> {}

/**
 * Cite element props
 */
export interface CiteProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Del element props
 */
export interface DelProps
  extends CommonProps,
    React.DelHTMLAttributes<HTMLModElement> {}

/**
 * Ins element props
 */
export interface InsProps
  extends CommonProps,
    React.InsHTMLAttributes<HTMLModElement> {}

/**
 * Kbd element props
 */
export interface KbdProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Mark element props
 */
export interface MarkProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Q element props
 */
export interface QProps
  extends CommonProps,
    React.QuoteHTMLAttributes<HTMLQuoteElement> {}

/**
 * S element props
 */
export interface SProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Samp element props
 */
export interface SampProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Strong element props
 */
export interface StrongProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Sub element props
 */
export interface SubProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Sup element props
 */
export interface SupProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Wbr element props
 */
export interface WbrProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Area element props
 */
export interface AreaProps
  extends CommonProps,
    React.AreaHTMLAttributes<HTMLAreaElement> {}

/**
 * Map element props
 */
export interface MapProps
  extends CommonProps,
    React.MapHTMLAttributes<HTMLMapElement> {}

/**
 * Col element props
 */
export interface ColProps
  extends CommonProps,
    React.ColHTMLAttributes<HTMLTableColElement> {}

/**
 * ColGroup element props
 */
export interface ColGroupProps
  extends CommonProps,
    React.ColgroupHTMLAttributes<HTMLTableColElement> {}

/**
 * Caption element props
 */
export interface CaptionProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * THead element props
 */
export interface THeadProps
  extends CommonProps,
    React.HTMLAttributes<HTMLTableSectionElement> {}

/**
 * TBody element props
 */
export interface TBodyProps
  extends CommonProps,
    React.HTMLAttributes<HTMLTableSectionElement> {}

/**
 * TFoot element props
 */
export interface TFootProps
  extends CommonProps,
    React.HTMLAttributes<HTMLTableSectionElement> {}

/**
 * Th element props
 */
export interface ThProps
  extends CommonProps,
    React.ThHTMLAttributes<HTMLTableHeaderCellElement> {}

/**
 * Fieldset element props
 */
export interface FieldsetProps
  extends CommonProps,
    React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

/**
 * Legend element props
 */
export interface LegendProps
  extends CommonProps,
    React.HTMLAttributes<HTMLLegendElement> {}

/**
 * Datalist element props
 */
export interface DatalistProps
  extends CommonProps,
    React.HTMLAttributes<HTMLDataListElement> {}

/**
 * OptGroup element props
 */
export interface OptGroupProps
  extends CommonProps,
    React.OptgroupHTMLAttributes<HTMLOptGroupElement> {}

/**
 * Option element props
 */
export interface OptionProps
  extends CommonProps,
    React.OptionHTMLAttributes<HTMLOptionElement> {}

/**
 * Output element props
 */
export interface OutputProps
  extends CommonProps,
    React.OutputHTMLAttributes<HTMLOutputElement> {}

/**
 * Progress element props
 */
export interface ProgressProps
  extends CommonProps,
    React.ProgressHTMLAttributes<HTMLProgressElement> {}

/**
 * Meter element props
 */
export interface MeterProps
  extends CommonProps,
    React.MeterHTMLAttributes<HTMLMeterElement> {}

/**
 * Html element props
 */
export interface HtmlProps
  extends CommonProps,
    React.HtmlHTMLAttributes<HTMLHtmlElement> {}

/**
 * Head element props
 */
export interface HeadProps
  extends CommonProps,
    React.HTMLAttributes<HTMLHeadElement> {}

/**
 * Base element props
 */
export interface BaseProps
  extends CommonProps,
    React.BaseHTMLAttributes<HTMLBaseElement> {}

/**
 * Meta element props
 */
export interface MetaProps
  extends CommonProps,
    React.MetaHTMLAttributes<HTMLMetaElement> {}

/**
 * Script element props
 */
export interface ScriptProps
  extends CommonProps,
    React.ScriptHTMLAttributes<HTMLScriptElement> {}

/**
 * NoScript element props
 */
export interface NoScriptProps
  extends CommonProps,
    React.HTMLAttributes<HTMLElement> {}

/**
 * Template element props
 */
export interface TemplateProps
  extends CommonProps,
    React.HTMLAttributes<HTMLTemplateElement> {}

/**
 * Slot element props
 */
export interface SlotProps
  extends CommonProps,
    React.SlotHTMLAttributes<HTMLSlotElement> {}
