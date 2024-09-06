const user = [
  {
    id: 1,
    name: "Mokshit",
  },
  {
    id: 2,
    name: "USER2",
  },
  { id: 3, name: "user3" },
];

const medicine = [
  {
    id: 1,
    userId: 1,
    medicines: [
      {
        name: "Paracetamol",
        mg: 500,
        inDay: 2,
        taken: "after",
        upto: 5,
      },
      {
        name: "Ibuprofen",
        mg: 200,
        inDay: 3,
        taken: "before",
        upto: 7,
      },
      {
        name: "Amoxicillin",
        mg: 250,
        inDay: 3,
        taken: "after",
        upto: 10,
      },
    ],
  },
  {
    id: 2,
    userId: 2,
    medicines: [
      {
        name: "Aspirin",
        mg: 100,
        inDay: 1,
        taken: "after",
        upto: 3,
      },
      {
        name: "Cetirizine",
        mg: 10,
        inDay: 1,
        taken: "before",
        upto: 5,
      },
      {
        name: "Metformin",
        mg: 500,
        inDay: 2,
        taken: "with",
        upto: 30,
      },
    ],
  },
  {
    id: 3,
    userId: 3,
    medicines: [
      {
        name: "Lisinopril",
        mg: 10,
        inDay: 1,
        taken: "before",
        upto: 30,
      },
      {
        name: "Atorvastatin",
        mg: 20,
        inDay: 1,
        taken: "after",
        upto: 30,
      },
      {
        name: "Omeprazole",
        mg: 20,
        inDay: 1,
        taken: "before",
        upto: 14,
      },
    ],
  },
];

const medicinePrices = {
  Paracetamol: 0.1,
  Ibuprofen: 0.15,
  Amoxicillin: 0.2,
  Aspirin: 0.05,
  Cetirizine: 0.08,
  Metformin: 0.12,
  Lisinopril: 0.18,
  Atorvastatin: 0.25,
  Omeprazole: 0.22,
};

module.exports = { user, medicine, medicinePrices };
