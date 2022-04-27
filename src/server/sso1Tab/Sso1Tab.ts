import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/sso1Tab/index.html")
@PreventIframe("/sso1Tab/config.html")
@PreventIframe("/sso1Tab/remove.html")
export class Sso1Tab {
}
