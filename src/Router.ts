import * as tools from "./tools";
import {
  PageWelcome,
  attachPageWelcomeEvents,
  attachPageWelcomeEvents2,
} from "./pages/PageWelcome";
import { PageInfo, attachPageInfoEvents } from "./pages/PageInfo";
import { PageAbout } from "./pages/PageAbout";
import { Page404 } from "./pages/Page404";
import {
  PageBedarfsrechnerPR3,
  attachPageBedarfsrechnerPR3Events,
} from "./pages/PageBedarfsrechnerPR3";

const pageNames = ["Welcome", "Bedarfsrechner", "Info", "About"];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
  switch (currentPageIdCode) {
    case "welcome":
      return PageWelcome();
    case "bedarfsrechner":
      return PageBedarfsrechnerPR3();
    case "info":
      return PageInfo();
    case "about":
      return PageAbout();
    default:
      return Page404();
  }
};

const getPageIdCode = (pageName: string) => {
  pageName = tools.cleanCharactersToAscii(pageName);
  return pageName.toLowerCase();
};

export const getMenu = () => {
  const getMenuClass = (pageName: string) => {
    const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
    if (pageIdCode === currentPageIdCode) {
      return ` class="active"`;
    } else {
      return "";
    }
  };

  return /*html*/ `
	<nav class="menu">
		<ul>
			${pageNames
        .map(
          (pageName) =>
            `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(
              pageName
            )}>${pageName}</a></li>`
        )
        .join("")}
		</ul>
	</nav>
`;
};

function getSmartCurrentPageId() {
  let currentPageIdCode = tools.getCurrentPageIdCode();
  currentPageIdCode =
    currentPageIdCode === ""
      ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase())
      : currentPageIdCode;
  return currentPageIdCode;
}
export const attachEvents = () => {
  switch (currentPageIdCode) {
    case "welcome":
      attachPageWelcomeEvents();
      attachPageWelcomeEvents2();
      break;
    case "bedarfsrechner":
      attachPageBedarfsrechnerPR3Events();
      break;
  }
};
