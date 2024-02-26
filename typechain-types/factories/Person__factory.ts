/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Person, PersonInterface } from "../Person";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getPerson",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newAge",
        type: "uint256",
      },
    ],
    name: "updatePersonAge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newName",
        type: "string",
      },
    ],
    name: "updatePersonName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000cf238038062000cf2833981810160405281019062000037919062000226565b8160009081620000489190620004cd565b50806001819055505050620005b4565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000c18262000076565b810181811067ffffffffffffffff82111715620000e357620000e262000087565b5b80604052505050565b6000620000f862000058565b9050620001068282620000b6565b919050565b600067ffffffffffffffff82111562000129576200012862000087565b5b620001348262000076565b9050602081019050919050565b60005b838110156200016157808201518184015260208101905062000144565b60008484015250505050565b6000620001846200017e846200010b565b620000ec565b905082815260208101848484011115620001a357620001a262000071565b5b620001b084828562000141565b509392505050565b600082601f830112620001d057620001cf6200006c565b5b8151620001e28482602086016200016d565b91505092915050565b6000819050919050565b6200020081620001eb565b81146200020c57600080fd5b50565b6000815190506200022081620001f5565b92915050565b6000806040838503121562000240576200023f62000062565b5b600083015167ffffffffffffffff81111562000261576200026062000067565b5b6200026f85828601620001b8565b925050602062000282858286016200020f565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002df57607f821691505b602082108103620002f557620002f462000297565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200035f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000320565b6200036b868362000320565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620003ae620003a8620003a284620001eb565b62000383565b620001eb565b9050919050565b6000819050919050565b620003ca836200038d565b620003e2620003d982620003b5565b8484546200032d565b825550505050565b600090565b620003f9620003ea565b62000406818484620003bf565b505050565b5b818110156200042e5762000422600082620003ef565b6001810190506200040c565b5050565b601f8211156200047d576200044781620002fb565b620004528462000310565b8101602085101562000462578190505b6200047a620004718562000310565b8301826200040b565b50505b505050565b600082821c905092915050565b6000620004a26000198460080262000482565b1980831691505092915050565b6000620004bd83836200048f565b9150826002028217905092915050565b620004d8826200028c565b67ffffffffffffffff811115620004f457620004f362000087565b5b620005008254620002c6565b6200050d82828562000432565b600060209050601f83116001811462000545576000841562000530578287015190505b6200053c8582620004af565b865550620005ac565b601f1984166200055586620002fb565b60005b828110156200057f5784890151825560018201915060208501945060208101905062000558565b868310156200059f57848901516200059b601f8916826200048f565b8355505b6001600288020188555050505b505050505050565b61072e80620005c46000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638ec4dc9514610046578063ae512f9114610065578063e987e58a14610081575b600080fd5b61004e61009d565b60405161005c9291906101ff565b60405180910390f35b61007f600480360381019061007a919061026f565b610139565b005b61009b600480360381019061009691906103d1565b610143565b005b60606000806001548180546100b190610449565b80601f01602080910402602001604051908101604052809291908181526020018280546100dd90610449565b801561012a5780601f106100ff5761010080835404028352916020019161012a565b820191906000526020600020905b81548152906001019060200180831161010d57829003601f168201915b50505050509150915091509091565b8060018190555050565b80600090816101529190610626565b5050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610190578082015181840152602081019050610175565b60008484015250505050565b6000601f19601f8301169050919050565b60006101b882610156565b6101c28185610161565b93506101d2818560208601610172565b6101db8161019c565b840191505092915050565b6000819050919050565b6101f9816101e6565b82525050565b6000604082019050818103600083015261021981856101ad565b905061022860208301846101f0565b9392505050565b6000604051905090565b600080fd5b600080fd5b61024c816101e6565b811461025757600080fd5b50565b60008135905061026981610243565b92915050565b60006020828403121561028557610284610239565b5b60006102938482850161025a565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102de8261019c565b810181811067ffffffffffffffff821117156102fd576102fc6102a6565b5b80604052505050565b600061031061022f565b905061031c82826102d5565b919050565b600067ffffffffffffffff82111561033c5761033b6102a6565b5b6103458261019c565b9050602081019050919050565b82818337600083830152505050565b600061037461036f84610321565b610306565b9050828152602081018484840111156103905761038f6102a1565b5b61039b848285610352565b509392505050565b600082601f8301126103b8576103b761029c565b5b81356103c8848260208601610361565b91505092915050565b6000602082840312156103e7576103e6610239565b5b600082013567ffffffffffffffff8111156104055761040461023e565b5b610411848285016103a3565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061046157607f821691505b6020821081036104745761047361041a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026104dc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261049f565b6104e6868361049f565b95508019841693508086168417925050509392505050565b6000819050919050565b600061052361051e610519846101e6565b6104fe565b6101e6565b9050919050565b6000819050919050565b61053d83610508565b6105516105498261052a565b8484546104ac565b825550505050565b600090565b610566610559565b610571818484610534565b505050565b5b818110156105955761058a60008261055e565b600181019050610577565b5050565b601f8211156105da576105ab8161047a565b6105b48461048f565b810160208510156105c3578190505b6105d76105cf8561048f565b830182610576565b50505b505050565b600082821c905092915050565b60006105fd600019846008026105df565b1980831691505092915050565b600061061683836105ec565b9150826002028217905092915050565b61062f82610156565b67ffffffffffffffff811115610648576106476102a6565b5b6106528254610449565b61065d828285610599565b600060209050601f831160018114610690576000841561067e578287015190505b610688858261060a565b8655506106f0565b601f19841661069e8661047a565b60005b828110156106c6578489015182556001820191506020850194506020810190506106a1565b868310156106e357848901516106df601f8916826105ec565b8355505b6001600288020188555050505b50505050505056fea264697066735822122007944c628d96d62ef77e49e7b4a7ce8ec31b5857533661de7b93df61709df68464736f6c63430008180033";

type PersonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PersonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Person__factory extends ContractFactory {
  constructor(...args: PersonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name: string,
    age: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name, age, overrides || {});
  }
  override deploy(
    name: string,
    age: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name, age, overrides || {}) as Promise<
      Person & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Person__factory {
    return super.connect(runner) as Person__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PersonInterface {
    return new Interface(_abi) as PersonInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Person {
    return new Contract(address, _abi, runner) as unknown as Person;
  }
}