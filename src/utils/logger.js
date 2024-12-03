
import log from "loglevel";

// Create the logger with a name
const logger = log.getLogger("myAppLogger"); 

// Set the log level (optional, default is "info")
logger.setLevel("info");

// Example usage:
logger.info("This is an info message");
logger.error("This is an error message");
logger.warn("This is a warning message");

export default logger;
