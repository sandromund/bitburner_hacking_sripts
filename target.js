/** @param {NS} ns */
export async function main(ns) {

    let minHackingLevel = 0;
    let maxHackingLevel = ns.getHackingLevel();

    let serversToScan = ["home"]; 
    let discoveredServers = []; 
    let hackableServers = []; 


    while (serversToScan.length > 0) {  
        let serverName = serversToScan.pop(); 
        let serverHackingLevel = ns.getServerRequiredHackingLevel(serverName); 

        for (let connectedServer of ns.scan(serverName)) {
            if (!discoveredServers.includes(connectedServer)){
              serversToScan.push(connectedServer); 
            }  
        }
        discoveredServers.push(serverName);

        if (serverHackingLevel >= minHackingLevel && serverHackingLevel <= maxHackingLevel) {
            let hackableServer = {};
            
            hackableServer.serverName = serverName;
            hackableServer.serverHackingLevel = serverHackingLevel;

            hackableServers.push(hackableServer);
        }
    }

    hackableServers.sort((a, b) => a.serverHackingLevel - b.serverHackingLevel);

    for (let server of hackableServers) {
        ns.tprint("------------------------------------");
        ns.tprint("Server: " + server.serverName);
        ns.tprint("Hacking Level: " + server.serverHackingLevel);
    }

    ns.tprint("------------------------------------");
}