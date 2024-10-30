class StyleSheetManager {
  private styles: Set<string> = new Set();
  private isServer: boolean;
  private styleSheet: CSSStyleSheet | null = null;

  constructor() {
    this.isServer = typeof window === "undefined";
    if (!this.isServer) {
      this.initBrowserStyleSheet();
    }
  }

  /**
   * Add a style to the manager
   * @param rule - The style rule to add
   */
  addStyle(rule: string): void {
    if (!this.styles.has(rule)) {
      this.styles.add(rule);
      if (!this.isServer) {
        this.insertRuleInBrowser(rule);
      }
    }
  }

  /**
   * Remove a style from the manager
   * @param rule - The style rule to remove
   */
  removeStyle(rule: string): void {
    if (this.styles.has(rule)) {
      this.styles.delete(rule);
      if (!this.isServer) {
        this.removeRuleInBrowser(rule);
      }
    }
  }

  /**
   * Clear styles from the manager
   */
  clearStyles(): void {
    this.styles.clear();
    if (!this.isServer) {
      this.clearStylesInBrowser();
    }
  }

  /**
   * Get styles as a string
   * @returns The styles as a string
   */
  getStylesAsString(): string {
    return Array.from(this.styles).join("\n");
  }

  /**
   * Collect styles from the manager
   * @returns The styles as a string
   */
  collectStyles(): string {
    return this.getStylesAsString();
  }

  /**
   * Reset styles in the manager
   */
  resetStyles(): void {
    this.clearStyles();
  }

  private initBrowserStyleSheet(): void {
    if (typeof document !== "undefined") {
      const style = document.createElement("style");
      document.head.appendChild(style);
      this.styleSheet = style.sheet;
    }
  }

  private insertRuleInBrowser(rule: string): void {
    if (this.styleSheet) {
      this.styleSheet.insertRule(rule, this.styleSheet.cssRules.length);
    }
  }

  private removeRuleInBrowser(rule: string): void {
    if (this.styleSheet) {
      const rules = Array.from(this.styleSheet.cssRules);
      const index = rules.findIndex((r) => r.cssText === rule);
      if (index !== -1) {
        this.styleSheet.deleteRule(index);
      }
    }
  }

  private clearStylesInBrowser(): void {
    if (this.styleSheet) {
      while (this.styleSheet.cssRules.length > 0) {
        this.styleSheet.deleteRule(0);
      }
    }
  }
}

/**
 * Styled-Chroma Sheet Manager SSR And CSR
 * @returns The singleton instance of StyleSheetManager
 */
export const styleSheetManager = new StyleSheetManager();

/**
 * Function to use in the server to get styles as string
 * @returns The styles as a string
 */
export function renderStyles(): string {
  const styles = styleSheetManager.collectStyles();
  return styles;
}
