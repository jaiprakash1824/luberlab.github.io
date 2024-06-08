// import Papa from "papaparse";

// export const loadCSV = (url, callback) => {
//   Papa.parse(url, {
//     download: true,
//     header: true,
//     complete: function (results) {
//       const data = results.data.map((row) => {
//         if (row.researchAreas) {
//           row.researchAreas = row.researchAreas
//             .split(",")
//             .map((area) => area.trim());
//           const emailIndex = row.researchAreas.findIndex((area) =>
//             /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(area)
//           );
//           if (emailIndex !== -1) {
//             row.email = row.researchAreas.splice(emailIndex, 1)[0];
//           }
//         }
//         return row;
//       });
//       callback(data);
//     },
//   });
// };
import Papa from "papaparse";

export const loadCSV = (url, callback) => {
  Papa.parse(url, {
    download: true,
    header: true,
    complete: function (results) {
      const data = results.data.map((row) => {
        if (row.researchAreas) {
          // Remove quotes and split the string into an array
          row.researchAreas = row.researchAreas
            .replace(/"/g, "")
            .split(",")
            .map((area) => area.trim());
        }
        return row;
      });
      callback(data);
    },
  });
};
