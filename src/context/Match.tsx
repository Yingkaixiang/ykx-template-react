import React from "react";
import { IConfig } from "@/config/routes";

const MatchContext: React.Context<IConfig[]> = React.createContext([]);

export default MatchContext;
