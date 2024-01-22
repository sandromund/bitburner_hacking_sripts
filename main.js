import { inspect} from "./target";
import { attack } from "./crack";

    /** @param {NS} ns */
export async function main(ns) {

    let hackableServers = inspect(ns);


    for (let server of hackableServers) {
        ns.tprint("------------------------------------");
        ns.tprint("Server: " + server.serverName);
        ns.tprint("Hacking Level: " + server.serverHackingLevel);
        attack(ns,  server.serverName)
    }

    ns.tprint("------------------------------------")
}
