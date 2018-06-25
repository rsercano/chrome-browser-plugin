/* GENERATED BY TYPECHAIN VER. 0.1.4 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import {
    TypeChainContract,
    promisify,
    ITxParams,
    IPayableTxParams,
    DeferredTransactionWrapper
} from "./typechain-runtime";

export class ClaimRepository extends TypeChainContract {
    public readonly rawWeb3Contract: any;

    public constructor(web3: any, address: string | BigNumber) {
        const abi = [
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" }
                ],
                name: "getSolver",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "totalClaims",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "db",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" }
                ],
                name: "getTokenCount",
                outputs: [{ name: "count", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "callers",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "owner",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" }
                ],
                name: "getSolverAddress",
                outputs: [{ name: "solverAddress", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_newOwner", type: "address" }],
                name: "changeOwner",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "getClaimCount",
                outputs: [{ name: "claimCount", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" }
                ],
                name: "isClaimed",
                outputs: [{ name: "claimed", type: "bool" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" },
                    { name: "_index", type: "uint256" }
                ],
                name: "getTokenByIndex",
                outputs: [{ name: "token", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_solverAddress", type: "address" },
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" },
                    { name: "_solver", type: "string" },
                    { name: "_token", type: "address" },
                    { name: "_requestBalance", type: "uint256" }
                ],
                name: "addClaim",
                outputs: [{ name: "", type: "bool" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_caller", type: "address" },
                    { name: "allowed", type: "bool" }
                ],
                name: "updateCaller",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [
                    { name: "_platform", type: "bytes32" },
                    { name: "_platformId", type: "string" },
                    { name: "_token", type: "address" }
                ],
                name: "getAmountByToken",
                outputs: [{ name: "token", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                inputs: [{ name: "_eternalStorage", type: "address" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "constructor"
            },
            { payable: false, stateMutability: "nonpayable", type: "fallback" }
        ];
        super(web3, address, abi);
    }

    static async createAndValidate(
        web3: any,
        address: string | BigNumber
    ): Promise<ClaimRepository> {
        const contract = new ClaimRepository(web3, address);
        const code = await promisify(web3.eth.getCode, [address]);
        if (code === "0x0") {
            throw new Error(`Contract at ${address} doesn't exist!`);
        }
        return contract;
    }

    public get totalClaims(): Promise<BigNumber> {
        return promisify(this.rawWeb3Contract.totalClaims, []);
    }
    public get db(): Promise<string> {
        return promisify(this.rawWeb3Contract.db, []);
    }
    public get owner(): Promise<string> {
        return promisify(this.rawWeb3Contract.owner, []);
    }
    public get getClaimCount(): Promise<BigNumber> {
        return promisify(this.rawWeb3Contract.getClaimCount, []);
    }
    public getSolver(_platform: BigNumber, _platformId: string): Promise<string> {
        return promisify(this.rawWeb3Contract.getSolver, [
            _platform.toString(),
            _platformId.toString()
        ]);
    }
    public getTokenCount(
        _platform: BigNumber,
        _platformId: string
    ): Promise<BigNumber> {
        return promisify(this.rawWeb3Contract.getTokenCount, [
            _platform.toString(),
            _platformId.toString()
        ]);
    }
    public callers(arg0: BigNumber | string): Promise<boolean> {
        return promisify(this.rawWeb3Contract.callers, [arg0.toString()]);
    }
    public getSolverAddress(
        _platform: BigNumber,
        _platformId: string
    ): Promise<string> {
        return promisify(this.rawWeb3Contract.getSolverAddress, [
            _platform.toString(),
            _platformId.toString()
        ]);
    }
    public isClaimed(
        _platform: BigNumber,
        _platformId: string
    ): Promise<boolean> {
        return promisify(this.rawWeb3Contract.isClaimed, [
            _platform.toString(),
            _platformId.toString()
        ]);
    }
    public getTokenByIndex(
        _platform: BigNumber,
        _platformId: string,
        _index: BigNumber | number
    ): Promise<string> {
        return promisify(this.rawWeb3Contract.getTokenByIndex, [
            _platform.toString(),
            _platformId.toString(),
            _index.toString()
        ]);
    }
    public getAmountByToken(
        _platform: BigNumber,
        _platformId: string,
        _token: BigNumber | string
    ): Promise<BigNumber> {
        return promisify(this.rawWeb3Contract.getAmountByToken, [
            _platform.toString(),
            _platformId.toString(),
            _token.toString()
        ]);
    }

    public changeOwnerTx(
        _newOwner: BigNumber | string
    ): DeferredTransactionWrapper<ITxParams> {
        return new DeferredTransactionWrapper<ITxParams>(this, "changeOwner", [
            _newOwner.toString()
        ]);
    }
    public addClaimTx(
        _solverAddress: BigNumber | string,
        _platform: BigNumber,
        _platformId: string,
        _solver: string,
        _token: BigNumber | string,
        _requestBalance: BigNumber | number
    ): DeferredTransactionWrapper<ITxParams> {
        return new DeferredTransactionWrapper<ITxParams>(this, "addClaim", [
            _solverAddress.toString(),
            _platform.toString(),
            _platformId.toString(),
            _solver.toString(),
            _token.toString(),
            _requestBalance.toString()
        ]);
    }
    public updateCallerTx(
        _caller: BigNumber | string,
        allowed: boolean
    ): DeferredTransactionWrapper<ITxParams> {
        return new DeferredTransactionWrapper<ITxParams>(this, "updateCaller", [
            _caller.toString(),
            allowed.toString()
        ]);
    }
}
