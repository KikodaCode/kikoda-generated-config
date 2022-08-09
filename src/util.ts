export const debug = (msg: string) => {
  if (process.env.DEBUG === 'true' || process.env.DEBUG === '1') console.log(msg);
};
