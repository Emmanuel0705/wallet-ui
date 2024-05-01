export interface ITransaction {
  address: string;
  amount: string;
}

export const shortWalletAddress = (walletAddress: string): string => {
  const firstFour = walletAddress.substring(0, 4);
  const lastThree = walletAddress.substring(walletAddress.length - 3);

  return `${firstFour}...${lastThree}`;
};

export const isArrayValid = (array: any[]): boolean => {
  for (const item of array) {
    console.log({ item });
    if (!("address" in item) || !("amount" in item)) {
      return false;
    }
  }
  return true;
};

const isValidEthAddress = (address: string): boolean => {
  // Regular expression for Ethereum address validation
  const ethAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;
  return ethAddressRegex.test(address);
};

export const checkError = (
  array: [any]
): { errors: { index: number; message: string }[]; errIndex: number[] } => {
  const errors: { index: number; message: string }[] = [];
  const errIndex: any[] = [];
  const addresses: string[] = [];

  array.forEach((item, index) => {
    if (!isValidEthAddress(item.address.trim())) {
      errIndex.push(index);

      errors.push({
        index: index + 1,
        message: `Line ${index + 1}: Inaccurate address ${item.address}`,
      });
    } else if (addresses.includes(item.address)) {
      errIndex.push(index);

      errors.push({
        index: index + 1,
        message: `Line ${index + 1}: Duplicate address ${item.address}`,
      });
    } else {
      addresses.push(item.address);
    }
  });

  return { errors, errIndex };
};

export const setAmountToSameValue = (
  array: ITransaction[],
  newValue: string
): ITransaction[] => {
  return array.map((item) => ({
    ...item,
    amount: newValue,
  }));
};

export const removeDuplicatesAndInvalidAddresses = (
  array: ITransaction[]
): ITransaction[] => {
  const validAddresses: Set<string> = new Set();
  const filteredTransactions: ITransaction[] = [];

  array.forEach((transaction) => {
    const trimmedAddress = transaction.address.trim();
    if (
      isValidEthAddress(trimmedAddress) &&
      !validAddresses.has(trimmedAddress)
    ) {
      validAddresses.add(trimmedAddress);
      filteredTransactions.push(transaction);
    }
  });

  return filteredTransactions;
};
