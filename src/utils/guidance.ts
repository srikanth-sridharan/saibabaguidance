import guidanceData from '../data/guidance.json';

export const getGuidance = async (number: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = guidanceData[number.toString()];
      if (message) {
        resolve(message);
      } else {
        reject(new Error('Guidance not found'));
      }
    }, 1000);
  });
};