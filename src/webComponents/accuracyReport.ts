import { diffWords } from "diff";
import { convertBibleVerseToText } from "../formatBibleVerse";
import { scriptureStyles } from "../sharedStyles";

export class AccuracyReport extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.#containerElement);
    shadowRoot.appendChild(this.#styleElement);
  }

  static get observedAttributes() {
    return ["recited-bible-verse"];
  }

  get #reportContainerElement() {
    return this.shadowRoot!.querySelector(
      "#report-container",
    ) as HTMLDivElement;
  }

  get verseReference() {
    return this.getAttribute("verse-reference");
  }

  get verseContent() {
    return this.getAttribute("verse-content");
  }

  get recitedBibleVerse() {
    return this.getAttribute("recited-bible-verse");
  }

  #calculateGrade({
    partCount,
    errorCount,
  }: {
    partCount: number;
    errorCount: number;
  }) {
    const percentageInDecimal = (partCount - errorCount) / partCount;
    let gradeLetter: string;

    if (percentageInDecimal === 1) {
      gradeLetter = "A+";
    } else if (percentageInDecimal >= 0.9) {
      gradeLetter = "A+";
    } else if (percentageInDecimal >= 0.8) {
      gradeLetter = "B";
    } else if (percentageInDecimal >= 0.7) {
      gradeLetter = "C";
    } else if (percentageInDecimal >= 0.6) {
      gradeLetter = "D";
    } else {
      gradeLetter = "F";
    }

    return {
      percentage: Math.floor(percentageInDecimal * 100),
      gradeLetter,
    };
  }

  #renderReport() {
    this.#reportContainerElement.innerHTML = "";

    if (!this.verseReference || !this.verseContent || !this.recitedBibleVerse) {
      return this.#renderErrorMessage(
        "Unable to display report. Complete Step 1 and Step 2 first.",
      );
    }

    // add reference and strip out html characters
    const verseText = `${this.verseReference} ${convertBibleVerseToText(this.verseContent)} ${this.verseReference}`;

    const { textDifferenceDivContainer, errorCount, partCount } =
      getDifferenceBetweenVerseAndInput({
        originalBibleVerseText: verseText,
        recitedBibleVerseText: this.recitedBibleVerse,
      });

    const { percentage, gradeLetter } = this.#calculateGrade({
      partCount,
      errorCount,
    });

    const divElement = document.createElement("div");
    divElement.innerHTML = `
      <table>
        <tbody>
          <tr>
            <td>Grade</td>
            <td>
              ${gradeLetter} (${percentage}%)
            </td>
          </tr>
          <tr>
            <td>Verse Reference</td>
            <td>
              ${this.verseReference}
            </td>
          </tr>
          <tr>
            <td>Actual Verse</td>
            <td>
              <bible-verse-blockquote>
                <span class="scripture-styles" slot="bible-verse-content">
                  ${this.verseContent}
                 </span>
              </bible-verse-blockquote>
            </td>
          </tr>
          <tr>
            <td>Recited Verse</td>
            <td>
              ${this.recitedBibleVerse}
            </td>
          </tr>
          <tr>
            <td>Text Difference</td>
            <td>
              ${textDifferenceDivContainer.innerHTML}
            </td>
          </tr>
        </tbody>
      </table>
    `;

    this.#reportContainerElement.appendChild(divElement);
  }

  #renderErrorMessage(message: string) {
    const alertErrorElement = document.createElement("alert-error");
    alertErrorElement.innerHTML = `
      <span slot="alert-error-message">${message}</span>
    `;
    this.#reportContainerElement.appendChild(alertErrorElement);
  }

  get #containerElement() {
    const divElement = document.createElement("div");
    divElement.id = "report-container";
    return divElement;
  }

  get #styleElement() {
    const styleElement = document.createElement("style");
    const colorGray400 = "oklch(70.4% .04 256.788)";

    const css = `
      :host {
        display: block;
      }
      table {
        table-layout: auto;
        text-indent: 0;
        border-color: inherit;
        border-collapse: collapse;
      }
      td {
        border-bottom: 1px solid ${colorGray400};
        padding: 1rem 0;
      }
      td:first-child {
        padding-right: 2rem;
      }
      ${scriptureStyles}
    `;
    styleElement.textContent = css;
    return styleElement;
  }

  connectedCallback() {
    this.#renderReport();
  }

  attributeChangedCallback(name: string) {
    if (name !== "recited-bible-verse") {
      return;
    }
    this.#renderReport();
  }
}

type GetDifferenceBetweenVerseAndInputOptions = {
  originalBibleVerseText: string;
  recitedBibleVerseText: string;
};

function getDifferenceBetweenVerseAndInput({
  originalBibleVerseText,
  recitedBibleVerseText,
}: GetDifferenceBetweenVerseAndInputOptions) {
  const difference = diffWords(recitedBibleVerseText, originalBibleVerseText, {
    ignoreCase: true,
  });

  const divElement = document.createElement("div");
  let errorCount = 0;
  for (const part of difference) {
    // green for additions, red for deletions
    // grey for common parts
    let color = "grey";

    if (part.added) {
      // ignore punctuation
      if (![".", ";", ",", "¶"].includes(part.value.trim())) {
        color = "green";
        errorCount++;
      }
    }

    if (part.removed) {
      color = "red";
      errorCount++;
    }

    const span = document.createElement("span");
    span.style.color = color;
    span.appendChild(document.createTextNode(part.value));
    divElement.appendChild(span);
  }

  return {
    textDifferenceDivContainer: divElement,
    errorCount: errorCount,
    partCount: difference.length,
  };
}

window.customElements.define("accuracy-report", AccuracyReport);
