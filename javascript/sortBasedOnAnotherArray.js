const statusOrder = [
  "active",
  "waiting_signature",
  "pending_insurer",
  "sent_insurer",
  "signed",
  "canceled",
  "declined",
  "no_deal",
];

const inputList = [
  { id: 1, status: "no_deal" },
  { id: 2, status: "sent_insurer" },
  { id: 3, status: "no_deal" },
  { id: 4, status: "active" },
  { id: 5, status: "canceled" },
  { id: 6, status: "active" },
  { id: 6, status: "waiting_signature" },
];

const sortedByStatusList = inputList.sort((a, b) => {
  return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
});

console.log(sortedByStatusList);
