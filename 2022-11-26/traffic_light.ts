// 8 kyu Thinkful - Logic Drills: Traffic light

export function updateLight(current: string): string {
  if (current == "green") {
    return "yellow";
  } else if (current == "yellow") {
    return "red";
  } else {
    return "green";
  }
}
