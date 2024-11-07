import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const transactionCategoryMap = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const transactionPaymentMethod = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};

export const transactionTypeOptions = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Ganho",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const transactionPaymentMethodOptions = [
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: transactionPaymentMethod[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: transactionPaymentMethod[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: transactionPaymentMethod[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: transactionPaymentMethod[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: transactionPaymentMethod[TransactionPaymentMethod.OTHER],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: transactionPaymentMethod[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: transactionPaymentMethod[TransactionPaymentMethod.CASH],
  },
];

export const transactionCategoryMapOptions = [
  {
    value: TransactionCategory.EDUCATION,
    label: transactionCategoryMap[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: transactionCategoryMap[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: transactionCategoryMap[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: transactionCategoryMap[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: transactionCategoryMap[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.OTHER,
    label: transactionCategoryMap[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: transactionCategoryMap[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: transactionCategoryMap[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: transactionCategoryMap[TransactionCategory.UTILITY],
  },
];
