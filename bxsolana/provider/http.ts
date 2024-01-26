import { MAINNET_API_NY_HTTP } from "../utils/constants"
import {
    GetAccountBalanceRequest,
    GetAccountBalanceResponse,
    GetOrderbookResponse,
    GetRecentBlockHashRequest,
    GetRecentBlockHashResponse,
    GetServerTimeRequest,
    GetServerTimeResponse,
    GetTickersRequest,
    GetTickersResponse,
    GetTradesRequest,
    GetTradesResponse,
    GetUnsettledResponse,
    PostOrderResponse,
    PostSettleResponse,
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
    PostSubmitRequest,
    PostSubmitResponse,
    GetMarketDepthResponse,
    GetMarketDepthRequestV2,
    GetMarketDepthResponseV2,
    GetMarketsRequestV2,
    GetMarketsResponseV2,
    GetOpenOrdersRequestV2,
    GetOrderbookRequestV2,
    GetOrderbookResponseV2,
    GetTickersRequestV2,
    GetTickersResponseV2,
    GetUnsettledRequestV2,
    PostCancelOrderRequestV2,
    PostCancelOrderResponseV2,
    PostOrderRequestV2,
    PostReplaceOrderRequestV2,
    PostSettleRequestV2,
    GetJupiterPricesRequest,
    GetJupiterPricesResponse,
    GetJupiterQuotesRequest,
    GetJupiterQuotesResponse,
    PostJupiterRouteSwapRequest,
    PostJupiterRouteSwapResponse,
    PostJupiterSwapRequest,
    PostJupiterSwapResponse,
    PostRaydiumRouteSwapRequest,
    PostRaydiumRouteSwapResponse,
    PostRaydiumSwapRequest,
    PostRaydiumSwapResponse,
    GetRaydiumPoolsRequest,
    GetRaydiumPoolsResponse,
    GetRaydiumPricesRequest,
    GetRaydiumPricesResponse,
    GetRaydiumQuotesRequest,
    GetRaydiumQuotesResponse,
    GetOpenOrdersResponseV2,
    GetTransactionRequest,
    GetTransactionResponse,
} from "../proto/messages/api"
import { BaseProvider } from "./base"
import { isRpcError, RpcError } from "../utils/error"
import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    RawAxiosRequestHeaders,
} from "axios"
import { RpcReturnType } from "../proto/runtime/rpc"

export class HttpProvider extends BaseProvider {
    private readonly baseUrl: string
    private readonly baseUrlV2: string
    requestConfig: AxiosRequestConfig

    constructor(
        authHeader: string,
        privateKey = "",
        address: string = MAINNET_API_NY_HTTP,
        requestConfig: AxiosRequestConfig = {}
    ) {
        super(authHeader, privateKey)
        this.baseUrl = address + "/api/v1"
        this.baseUrlV2 = address + "/api/v2"
        this.requestConfig = {
            ...requestConfig,
            headers: {
                Authorization: this.authHeader,
                "X-SDK": process.env.PACKAGE_NAME ?? "",
                "X-SDK-VERSION": process.env.PACKAGE_VERSION ?? "",
            },
        }
    }

    close = () => {
        // no need
    }

    getTransaction(
        request: GetTransactionRequest
    ): RpcReturnType<Promise<GetTransactionResponse>, []> {
        const path = `${this.baseUrlV2}/transaction?signature=${request.signature}`
        return this.get<GetTransactionResponse>(path)
    }

    getJupiterPrices(
        request: GetJupiterPricesRequest
    ): RpcReturnType<Promise<GetJupiterPricesResponse>, []> {
        let path = `${this.baseUrlV2}/jupiter/prices`
        const args = request.tokens.map((v) => `tokens=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return this.get<GetJupiterPricesResponse>(path)
    }

    getJupiterQuotes(
        request: GetJupiterQuotesRequest
    ): RpcReturnType<Promise<GetJupiterQuotesResponse>, []> {
        const path = `${this.baseUrlV2}/jupiter/quotes?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}&limit=${request.limit}`
        return this.get<GetJupiterQuotesResponse>(path)
    }

    postJupiterRouteSwap(
        request: PostJupiterRouteSwapRequest
    ): RpcReturnType<Promise<PostJupiterRouteSwapResponse>, []> {
        const path = `${this.baseUrlV2}/jupiter/route-swap`
        return this.post<
            PostJupiterRouteSwapRequest,
            PostJupiterRouteSwapResponse
        >(path, request)
    }

    postJupiterSwap(
        request: PostJupiterSwapRequest
    ): RpcReturnType<Promise<PostJupiterSwapResponse>, []> {
        const path = `${this.baseUrlV2}/jupiter/swap`
        return this.post<PostJupiterSwapRequest, PostJupiterSwapResponse>(
            path,
            request
        )
    }

    postRaydiumRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/route-swap`
        return this.post<
            PostRaydiumRouteSwapRequest,
            PostRaydiumRouteSwapResponse
        >(path, request)
    }

    postRaydiumSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/swap`
        return this.post<PostRaydiumSwapRequest, PostRaydiumSwapResponse>(
            path,
            request
        )
    }

    getRaydiumPools(
        request: GetRaydiumPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumPoolsResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/pools?pairOrAddress=${request.pairOrAddress}`
        return this.get<GetRaydiumPoolsResponse>(path)
    }

    getRaydiumPrices(
        request: GetRaydiumPricesRequest
    ): RpcReturnType<Promise<GetRaydiumPricesResponse>, []> {
        let path = `${this.baseUrlV2}/raydium/prices`
        const args = request.tokens.map((v) => `tokens=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return this.get<GetRaydiumPricesResponse>(path)
    }

    getRaydiumQuotes(
        request: GetRaydiumQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumQuotesResponse>, []> {
        const path = `${this.baseUrlV2}/raydium/quotes?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}`
        return this.get<GetRaydiumQuotesResponse>(path)
    }

    // Openbook V2
    getOrderbookV2 = (
        request: GetOrderbookRequestV2
    ): Promise<GetOrderbookResponseV2> => {
        const path = `${this.baseUrlV2}/openbook/orderbooks/${request.market}?limit=${request.limit}`
        return this.get<GetOrderbookResponseV2>(path)
    }

    getMarketDepthV2(
        request: GetMarketDepthRequestV2
    ): Promise<GetMarketDepthResponseV2> {
        const path = `${this.baseUrlV2}/openbook/depth/${request.market}?limit=${request.limit}`
        return this.get<GetMarketDepthResponseV2>(path)
    }

    getMarketsV2(request: GetMarketsRequestV2): Promise<GetMarketsResponseV2> {
        const path = `${this.baseUrlV2}/openbook/markets`
        return this.get<GetMarketsResponseV2>(path)
    }

    getTickersV2(request: GetTickersRequestV2): Promise<GetTickersResponseV2> {
        const path = `${this.baseUrlV2}/openbook/tickers/${request.market}`
        return this.get<GetTickersResponseV2>(path)
    }

    getOpenOrdersV2(
        request: GetOpenOrdersRequestV2
    ): Promise<GetOpenOrdersResponseV2> {
        const path = `${this.baseUrlV2}/openbook/open-orders/${request.market}?address=${request.address}&limit=${request.limit}&openOrdersAddress=${request.openOrdersAddress}&orderID=${request.orderID}&clientOrderID=${request.clientOrderID}`
        return this.get<GetOpenOrdersResponseV2>(path)
    }

    getUnsettledV2(
        request: GetUnsettledRequestV2
    ): Promise<GetUnsettledResponse> {
        const path = `${this.baseUrlV2}/openbook/unsettled/${request.market}?ownerAddress=${request.ownerAddress}`
        return this.get<GetUnsettledResponse>(path)
    }

    postOrderV2(request: PostOrderRequestV2): Promise<PostOrderResponse> {
        const path = `${this.baseUrlV2}/openbook/place`
        return this.post<PostOrderRequestV2, PostOrderResponse>(path, request)
    }

    postCancelOrderV2(
        request: PostCancelOrderRequestV2
    ): Promise<PostCancelOrderResponseV2> {
        const path = `${this.baseUrlV2}/openbook/cancel`
        return this.post<PostCancelOrderRequestV2, PostCancelOrderResponseV2>(
            path,
            request
        )
    }

    postSettleV2(request: PostSettleRequestV2): Promise<PostSettleResponse> {
        const path = `${this.baseUrlV2}/openbook/settle`
        return this.post<PostSettleRequestV2, PostSettleResponse>(path, request)
    }

    postReplaceOrderV2(
        request: PostReplaceOrderRequestV2
    ): Promise<PostOrderResponse> {
        const path = `${this.baseUrlV2}/openbook/replace`
        return this.post<PostReplaceOrderRequestV2, PostOrderResponse>(
            path,
            request
        )
    }
    // End of Openbook V2

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        const path = `${this.baseUrl}/market/tickers/${request.market}?project=${request.project}`
        return this.get<GetTickersResponse>(path)
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        const path = `${this.baseUrl}/market/trades/${request.market}?limit=${request.limit}&project=${request.project}`
        return this.get<GetTradesResponse>(path)
    }

    getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        const path = `${this.baseUrl}/system/time`
        return this.get<GetServerTimeResponse>(path)
    }

    getAccountBalance(
        request: GetAccountBalanceRequest
    ): Promise<GetAccountBalanceResponse> {
        const path = `${this.baseUrl}/account/balance?ownerAddress=${request.ownerAddress}`
        return this.get<GetAccountBalanceResponse>(path)
    }

    getRecentBlockHash(
        request: GetRecentBlockHashRequest
    ): Promise<GetRecentBlockHashResponse> {
        const path = `${this.baseUrl}/system/blockhash`
        return this.get<GetRecentBlockHashResponse>(path)
    }

    postSubmitV2(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        const path = `${this.baseUrlV2}/submit`
        return this.post<PostSubmitRequest, PostSubmitResponse>(path, request)
    }

    postSubmitBatchV2(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        const path = `${this.baseUrlV2}/submit-batch`
        return this.post<PostSubmitBatchRequest, PostSubmitBatchResponse>(
            path,
            request
        )
    }

    private async get<T>(path: string): Promise<T> {
        try {
            const response = await axios.get(path, this.requestConfig)
            return this.handleResponse<T>(response)
        } catch (e) {
            this.handleError(e)
        }
    }

    private async post<T, R>(path: string, data: T): Promise<R> {
        try {
            const headers: RawAxiosRequestHeaders = {
                ...this.requestConfig.headers,
            }
            headers["Content-Type"] = "application/json"

            const response = await axios({
                ...this.requestConfig,
                url: path,
                method: "POST",
                data,
                headers,
            })
            return this.handleResponse<R>(response)
        } catch (e) {
            this.handleError(e)
        }
    }

    handleError(e: unknown): never {
        if (e instanceof axios.AxiosError) {
            if (e.response) {
                let data = e.response.data
                if (data instanceof Object) {
                    data = JSON.stringify(data)
                }
                throw new Error(
                    `error code [${e.response.status}] received: ${data}`
                )
            } else if (e.request) {
                throw new Error(
                    `could not complete request: [${e.name}/${e.code}]: ${e.message}`
                )
            }
            throw new Error(
                `unknown axios error: [${e.name}/${e.code}]: ${e.message}`
            )
        }
        throw e
    }

    handleResponse<T>(response: AxiosResponse): T {
        if (response.status !== 200) {
            throw new Error(
                `error code [${response.status}] received: ${JSON.stringify(
                    response.data
                )}`
            )
        }

        if (isRpcError(response)) {
            throw new Error((response.data as RpcError).message)
        }

        return response.data as unknown as T
    }
}
