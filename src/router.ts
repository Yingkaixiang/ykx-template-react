import arrayToTree from "array-to-tree";

import routes from "@/config/routes";
import Layout from "@/components/Layout/";

const tree = arrayToTree(routes, {
  customID: "id",
  parentProperty: "pid",
  childrenProperty: "routes",
});

const router = [
  {
    component: Layout,
    routes: tree,
  },
];

export default router;
