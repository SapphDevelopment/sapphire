import { SapphireConfig } from "./typings/index";
import "dotenv/config"

export const config: SapphireConfig = {
    client: {
        token: process.env.TOKEN as string
    }
};
