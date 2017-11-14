var install = require("install.zip").makeInstaller({
  // Optional list of file extensions to be appended to required module 
  // identifiers if they do not exactly match an installed module. 
  extensions: [".js", ".json"],
 
  // If defined, the options.onInstall function will be called any time 
  // new modules are installed. 
  onInstall,
 
  // If defined, the options.override function will be called before 
  // looking up any top-level package identifiers in node_modules 
  // directories. It can return either a string to provide an alternate 
  // package identifier or a non-string value to prevent the lookup from 
  // proceeding. 
  override,
 
  // If defined, the options.fallback function will be called when no 
  // installed module is found for a required module identifier. Often 
  // options.fallback will be implemented in terms of the native Node 
  // require function, which has the ability to load binary modules. 
  fallback
});
