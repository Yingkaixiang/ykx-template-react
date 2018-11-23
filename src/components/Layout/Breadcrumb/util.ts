import { menu, IMenu } from "@/config/routes";
import { IBreadcrumbItem } from "./index";

export function format(pathname: string): IBreadcrumbItem[] {
  return menu.filter((item: IMenu) => {
    if (item.url && pathname.indexOf(item.url) !== -1) {
      return true;
    }
    return false;
  });
}
