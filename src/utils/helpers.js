import moment from "moment";

export const sortData = (data, type, by) => {
  let sorted_data;
  if (type === "vtuber") {
    sorted_data = data.map((item) => item.generacion);
    return ["all", ...new Set(sorted_data.sort())];
  }
  if (type === "members") {
    sorted_data = data.filter(
      (item) => item.generacion === by.generacion && item._id !== by._id
    );
    return sorted_data;
  }
  sorted_data = Object.keys(data);
  return sorted_data.slice(0, 3);
};

export const flatData = (data, filter) => {
  let flatData;
  flatData = Object.entries(data);
  flatData = flatData.filter((item) => item[0] !== filter);
  return flatData;
};

export const sortDate = (data, byWhat) => {
  const sortByDate = (oldData, what) => {
    const sorter = (a, b) => {
      return new moment(a[what]) - moment(b[what]);
    };
    oldData.sort(sorter);
    return oldData;
  };

  if (byWhat === "upcoming") {
    data = sortByDate(data, "live_schedule");
    return data;
  }
  data = sortByDate(data, "live_end");
  return data.reverse();
};
