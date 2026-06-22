const SHEET_URL = "https://script.google.com/macros/s/AKfycbxL94ceO5GIf16vxcqYOG0fX_smdAiQ-LpVdn9A_VRoO7aZVWrV5u4QP4GJJ0jpHA8LFQ/exec";

function getUserId() {
  let userId = localStorage.getItem("userId");

  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("userId", userId);
  }

  return userId;
}

export function sendEvent(event, category) {
  fetch(SHEET_URL, {
    method: "POST",
    body: JSON.stringify({
      userId: getUserId(),
      event,
      category
    })
  });
}