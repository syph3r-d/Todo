export const checkCorsOrigin = (origin: any, callback: any) => {
  const origins = Object.values(["http://localhost:3000"]);

  let result = origins.find(
    (url) => extractHostname(url) == extractHostname(origin)
  );

  if (result || !origin) {
    callback(null, true);
  } else {
    callback(
      `The CORS policy for this site does not allow access from the specified Origin.(${origin})`,
      false
    );
  }
};

const extractHostname = (url: string) => {
  if (!url) return "";

  let hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("//") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }

  //find & remove port number
  hostname = hostname.split(":")[0];
  //find & remove "?"
  hostname = hostname.split("?")[0];

  return hostname;
};
