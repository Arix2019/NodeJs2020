// informações dobre o sistema
const os = require('os');

console.log("Nome do host: " + os.hostname() +
            "\nSistema Operacional: " + os.type() + 
	    "\nDiretório atual do usuário: " + os.homedir() + 
	    "\nRelease: " + os.release() +
	    "\nArquitetura da CPU: " + os.arch() +	
            "\nMemória disponivel no sitema: " + os.freemem())

