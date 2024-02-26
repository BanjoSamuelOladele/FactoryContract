/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface PersonsInterface extends Interface {
  getFunction(
    nameOrSignature: "createPerson" | "getAUser" | "updateAge" | "updateName"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createPerson",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAUser",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAge",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateName",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createPerson",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateAge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateName", data: BytesLike): Result;
}

export interface Persons extends BaseContract {
  connect(runner?: ContractRunner | null): Persons;
  waitForDeployment(): Promise<this>;

  interface: PersonsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createPerson: TypedContractMethod<
    [name: string, age: BigNumberish],
    [void],
    "nonpayable"
  >;

  getAUser: TypedContractMethod<
    [index: BigNumberish],
    [[string, bigint]],
    "view"
  >;

  updateAge: TypedContractMethod<
    [age: BigNumberish, index: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateName: TypedContractMethod<
    [index: BigNumberish, name: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createPerson"
  ): TypedContractMethod<
    [name: string, age: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAUser"
  ): TypedContractMethod<[index: BigNumberish], [[string, bigint]], "view">;
  getFunction(
    nameOrSignature: "updateAge"
  ): TypedContractMethod<
    [age: BigNumberish, index: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateName"
  ): TypedContractMethod<
    [index: BigNumberish, name: string],
    [void],
    "nonpayable"
  >;

  filters: {};
}
