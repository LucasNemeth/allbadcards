type Environments = "local" | "prod" | "beta";

declare const __SERVER_ENV__: Environments;
declare const __PORT__: number;
declare const __VERSION__: number;
declare const __OUTPUT_DIR__: string;

const env = typeof __SERVER_ENV__ !== "undefined" ? __SERVER_ENV__ : "local";
const port = typeof __PORT__ !== "undefined" ? __PORT__ : 5000;
const version = typeof __VERSION__ !== "undefined" ? __VERSION__ : Date.now();
const outputDir = typeof __OUTPUT_DIR__ !== "undefined" ? __OUTPUT_DIR__ : "none";

export class Config
{
	public static Environment = env;
	public static Port = port;
	public static Version = version;
	public static OutputDir = outputDir;

	public static get host()
	{
		let host = "https://allbad.cards";

		switch (this.Environment)
		{
			case "local":
				host = "http://jlauer.local:5000";
				break;
			case "beta":
				host = "http://beta.allbad.cards";
				break;
			case "prod":
				host = "https://allbad.cards";
				break;
		}

		return host;
	}
}

