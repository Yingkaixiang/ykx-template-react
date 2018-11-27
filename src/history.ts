import { createBrowserHistory } from "history";
import { orderBy } from "lodash";

import { menu, IMenu } from "@/config/routes";

const history = createBrowserHistory();
const sortedMenu = orderBy(menu, ["url"]);

history.listen((location) => {
  const { pathname } = location;
  const matches = sortedMenu.filter((item: IMenu) => {
    return item.url && pathname.indexOf(item.url) !== -1;
  });
  console.dir(matches);
});

export default history;
