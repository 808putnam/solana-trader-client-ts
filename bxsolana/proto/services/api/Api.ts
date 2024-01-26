import {
  RpcReturnType,
  RpcClientImpl,
  MethodDescriptor,
} from "../../runtime/rpc";
import {
  Type as GetTransactionRequest,
  encodeBinary,
  decodeBinary,
  encodeJson,
} from "../../messages/api/GetTransactionRequest";
import {
  Type as GetTransactionResponse,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
  encodeJson as encodeJson_1,
} from "../../messages/api/GetTransactionResponse";
import {
  Type as PostSubmitRequest,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
  encodeJson as encodeJson_2,
} from "../../messages/api/PostSubmitRequest";
import {
  Type as PostSubmitResponse,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
  encodeJson as encodeJson_3,
} from "../../messages/api/PostSubmitResponse";
import {
  Type as PostSubmitBatchRequest,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
  encodeJson as encodeJson_4,
} from "../../messages/api/PostSubmitBatchRequest";
import {
  Type as PostSubmitBatchResponse,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
  encodeJson as encodeJson_5,
} from "../../messages/api/PostSubmitBatchResponse";
import {
  Type as GetRaydiumPoolsRequest,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
  encodeJson as encodeJson_6,
} from "../../messages/api/GetRaydiumPoolsRequest";
import {
  Type as GetRaydiumPoolsResponse,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
  encodeJson as encodeJson_7,
} from "../../messages/api/GetRaydiumPoolsResponse";
import {
  Type as GetRaydiumQuotesRequest,
  encodeBinary as encodeBinary_8,
  decodeBinary as decodeBinary_8,
  encodeJson as encodeJson_8,
} from "../../messages/api/GetRaydiumQuotesRequest";
import {
  Type as GetRaydiumQuotesResponse,
  encodeBinary as encodeBinary_9,
  decodeBinary as decodeBinary_9,
  encodeJson as encodeJson_9,
} from "../../messages/api/GetRaydiumQuotesResponse";
import {
  Type as GetRaydiumPricesRequest,
  encodeBinary as encodeBinary_10,
  decodeBinary as decodeBinary_10,
  encodeJson as encodeJson_10,
} from "../../messages/api/GetRaydiumPricesRequest";
import {
  Type as GetRaydiumPricesResponse,
  encodeBinary as encodeBinary_11,
  decodeBinary as decodeBinary_11,
  encodeJson as encodeJson_11,
} from "../../messages/api/GetRaydiumPricesResponse";
import {
  Type as PostRaydiumSwapRequest,
  encodeBinary as encodeBinary_12,
  decodeBinary as decodeBinary_12,
  encodeJson as encodeJson_12,
} from "../../messages/api/PostRaydiumSwapRequest";
import {
  Type as PostRaydiumSwapResponse,
  encodeBinary as encodeBinary_13,
  decodeBinary as decodeBinary_13,
  encodeJson as encodeJson_13,
} from "../../messages/api/PostRaydiumSwapResponse";
import {
  Type as PostRaydiumRouteSwapRequest,
  encodeBinary as encodeBinary_14,
  decodeBinary as decodeBinary_14,
  encodeJson as encodeJson_14,
} from "../../messages/api/PostRaydiumRouteSwapRequest";
import {
  Type as PostRaydiumRouteSwapResponse,
  encodeBinary as encodeBinary_15,
  decodeBinary as decodeBinary_15,
  encodeJson as encodeJson_15,
} from "../../messages/api/PostRaydiumRouteSwapResponse";
import {
  Type as GetJupiterQuotesRequest,
  encodeBinary as encodeBinary_16,
  decodeBinary as decodeBinary_16,
  encodeJson as encodeJson_16,
} from "../../messages/api/GetJupiterQuotesRequest";
import {
  Type as GetJupiterQuotesResponse,
  encodeBinary as encodeBinary_17,
  decodeBinary as decodeBinary_17,
  encodeJson as encodeJson_17,
} from "../../messages/api/GetJupiterQuotesResponse";
import {
  Type as GetJupiterPricesRequest,
  encodeBinary as encodeBinary_18,
  decodeBinary as decodeBinary_18,
  encodeJson as encodeJson_18,
} from "../../messages/api/GetJupiterPricesRequest";
import {
  Type as GetJupiterPricesResponse,
  encodeBinary as encodeBinary_19,
  decodeBinary as decodeBinary_19,
  encodeJson as encodeJson_19,
} from "../../messages/api/GetJupiterPricesResponse";
import {
  Type as PostJupiterSwapRequest,
  encodeBinary as encodeBinary_20,
  decodeBinary as decodeBinary_20,
  encodeJson as encodeJson_20,
} from "../../messages/api/PostJupiterSwapRequest";
import {
  Type as PostJupiterSwapResponse,
  encodeBinary as encodeBinary_21,
  decodeBinary as decodeBinary_21,
  encodeJson as encodeJson_21,
} from "../../messages/api/PostJupiterSwapResponse";
import {
  Type as PostJupiterRouteSwapRequest,
  encodeBinary as encodeBinary_22,
  decodeBinary as decodeBinary_22,
  encodeJson as encodeJson_22,
} from "../../messages/api/PostJupiterRouteSwapRequest";
import {
  Type as PostJupiterRouteSwapResponse,
  encodeBinary as encodeBinary_23,
  decodeBinary as decodeBinary_23,
  encodeJson as encodeJson_23,
} from "../../messages/api/PostJupiterRouteSwapResponse";
import {
  Type as GetMarketsRequestV2,
  encodeBinary as encodeBinary_24,
  decodeBinary as decodeBinary_24,
  encodeJson as encodeJson_24,
} from "../../messages/api/GetMarketsRequestV2";
import {
  Type as GetMarketsResponseV2,
  encodeBinary as encodeBinary_25,
  decodeBinary as decodeBinary_25,
  encodeJson as encodeJson_25,
} from "../../messages/api/GetMarketsResponseV2";
import {
  Type as GetTickersRequestV2,
  encodeBinary as encodeBinary_26,
  decodeBinary as decodeBinary_26,
  encodeJson as encodeJson_26,
} from "../../messages/api/GetTickersRequestV2";
import {
  Type as GetTickersResponseV2,
  encodeBinary as encodeBinary_27,
  decodeBinary as decodeBinary_27,
  encodeJson as encodeJson_27,
} from "../../messages/api/GetTickersResponseV2";
import {
  Type as GetOrderbookRequestV2,
  encodeBinary as encodeBinary_28,
  decodeBinary as decodeBinary_28,
  encodeJson as encodeJson_28,
} from "../../messages/api/GetOrderbookRequestV2";
import {
  Type as GetOrderbookResponseV2,
  encodeBinary as encodeBinary_29,
  decodeBinary as decodeBinary_29,
  encodeJson as encodeJson_29,
} from "../../messages/api/GetOrderbookResponseV2";
import {
  Type as GetMarketDepthRequestV2,
  encodeBinary as encodeBinary_30,
  decodeBinary as decodeBinary_30,
  encodeJson as encodeJson_30,
} from "../../messages/api/GetMarketDepthRequestV2";
import {
  Type as GetMarketDepthResponseV2,
  encodeBinary as encodeBinary_31,
  decodeBinary as decodeBinary_31,
  encodeJson as encodeJson_31,
} from "../../messages/api/GetMarketDepthResponseV2";
import {
  Type as PostOrderRequestV2,
  encodeBinary as encodeBinary_32,
  decodeBinary as decodeBinary_32,
  encodeJson as encodeJson_32,
} from "../../messages/api/PostOrderRequestV2";
import {
  Type as PostOrderResponse,
  encodeBinary as encodeBinary_33,
  decodeBinary as decodeBinary_33,
  encodeJson as encodeJson_33,
} from "../../messages/api/PostOrderResponse";
import {
  Type as PostCancelOrderRequestV2,
  encodeBinary as encodeBinary_34,
  decodeBinary as decodeBinary_34,
  encodeJson as encodeJson_34,
} from "../../messages/api/PostCancelOrderRequestV2";
import {
  Type as PostCancelOrderResponseV2,
  encodeBinary as encodeBinary_35,
  decodeBinary as decodeBinary_35,
  encodeJson as encodeJson_35,
} from "../../messages/api/PostCancelOrderResponseV2";
import {
  Type as PostReplaceOrderRequestV2,
  encodeBinary as encodeBinary_36,
  decodeBinary as decodeBinary_36,
  encodeJson as encodeJson_36,
} from "../../messages/api/PostReplaceOrderRequestV2";
import {
  Type as PostSettleRequestV2,
  encodeBinary as encodeBinary_37,
  decodeBinary as decodeBinary_37,
  encodeJson as encodeJson_37,
} from "../../messages/api/PostSettleRequestV2";
import {
  Type as PostSettleResponse,
  encodeBinary as encodeBinary_38,
  decodeBinary as decodeBinary_38,
  encodeJson as encodeJson_38,
} from "../../messages/api/PostSettleResponse";
import {
  Type as GetOpenOrdersRequestV2,
  encodeBinary as encodeBinary_39,
  decodeBinary as decodeBinary_39,
  encodeJson as encodeJson_39,
} from "../../messages/api/GetOpenOrdersRequestV2";
import {
  Type as GetOpenOrdersResponseV2,
  encodeBinary as encodeBinary_40,
  decodeBinary as decodeBinary_40,
  encodeJson as encodeJson_40,
} from "../../messages/api/GetOpenOrdersResponseV2";
import {
  Type as GetUnsettledRequestV2,
  encodeBinary as encodeBinary_41,
  decodeBinary as decodeBinary_41,
  encodeJson as encodeJson_41,
} from "../../messages/api/GetUnsettledRequestV2";
import {
  Type as GetUnsettledResponse,
  encodeBinary as encodeBinary_42,
  decodeBinary as decodeBinary_42,
  encodeJson as encodeJson_42,
} from "../../messages/api/GetUnsettledResponse";
import {
  Type as GetKlineRequest,
  encodeBinary as encodeBinary_43,
  decodeBinary as decodeBinary_43,
  encodeJson as encodeJson_43,
} from "../../messages/api/GetKlineRequest";
import {
  Type as GetKlineResponse,
  encodeBinary as encodeBinary_44,
  decodeBinary as decodeBinary_44,
  encodeJson as encodeJson_44,
} from "../../messages/api/GetKlineResponse";
import {
  Type as GetTradesRequest,
  encodeBinary as encodeBinary_45,
  decodeBinary as decodeBinary_45,
  encodeJson as encodeJson_45,
} from "../../messages/api/GetTradesRequest";
import {
  Type as GetTradesResponse,
  encodeBinary as encodeBinary_46,
  decodeBinary as decodeBinary_46,
  encodeJson as encodeJson_46,
} from "../../messages/api/GetTradesResponse";
import {
  Type as GetServerTimeRequest,
  encodeBinary as encodeBinary_47,
  decodeBinary as decodeBinary_47,
  encodeJson as encodeJson_47,
} from "../../messages/api/GetServerTimeRequest";
import {
  Type as GetServerTimeResponse,
  encodeBinary as encodeBinary_48,
  decodeBinary as decodeBinary_48,
  encodeJson as encodeJson_48,
} from "../../messages/api/GetServerTimeResponse";
import {
  Type as GetRecentBlockHashRequest,
  encodeBinary as encodeBinary_49,
  decodeBinary as decodeBinary_49,
  encodeJson as encodeJson_49,
} from "../../messages/api/GetRecentBlockHashRequest";
import {
  Type as GetRecentBlockHashResponse,
  encodeBinary as encodeBinary_50,
  decodeBinary as decodeBinary_50,
  encodeJson as encodeJson_50,
} from "../../messages/api/GetRecentBlockHashResponse";
import {
  Type as GetAccountBalanceRequest,
  encodeBinary as encodeBinary_51,
  decodeBinary as decodeBinary_51,
  encodeJson as encodeJson_51,
} from "../../messages/api/GetAccountBalanceRequest";
import {
  Type as GetAccountBalanceResponse,
  encodeBinary as encodeBinary_52,
  decodeBinary as decodeBinary_52,
  encodeJson as encodeJson_52,
} from "../../messages/api/GetAccountBalanceResponse";
import {
  Type as GetTokenAccountsRequest,
  encodeBinary as encodeBinary_53,
  decodeBinary as decodeBinary_53,
  encodeJson as encodeJson_53,
} from "../../messages/api/GetTokenAccountsRequest";
import {
  Type as GetTokenAccountsResponse,
  encodeBinary as encodeBinary_54,
  decodeBinary as decodeBinary_54,
  encodeJson as encodeJson_54,
} from "../../messages/api/GetTokenAccountsResponse";
import {
  Type as GetOrdersRequest,
  encodeBinary as encodeBinary_55,
  decodeBinary as decodeBinary_55,
  encodeJson as encodeJson_55,
} from "../../messages/api/GetOrdersRequest";
import {
  Type as GetOrdersResponse,
  encodeBinary as encodeBinary_56,
  decodeBinary as decodeBinary_56,
  encodeJson as encodeJson_56,
} from "../../messages/api/GetOrdersResponse";
import {
  Type as GetOrderByIDRequest,
  encodeBinary as encodeBinary_57,
  decodeBinary as decodeBinary_57,
  encodeJson as encodeJson_57,
} from "../../messages/api/GetOrderByIDRequest";
import {
  Type as GetOrderByIDResponse,
  encodeBinary as encodeBinary_58,
  decodeBinary as decodeBinary_58,
  encodeJson as encodeJson_58,
} from "../../messages/api/GetOrderByIDResponse";
import {
  Type as GetOrderbooksRequest,
  encodeBinary as encodeBinary_59,
  decodeBinary as decodeBinary_59,
  encodeJson as encodeJson_59,
} from "../../messages/api/GetOrderbooksRequest";
import {
  Type as GetOrderbooksStreamResponse,
  encodeBinary as encodeBinary_60,
  decodeBinary as decodeBinary_60,
  encodeJson as encodeJson_60,
} from "../../messages/api/GetOrderbooksStreamResponse";
import {
  Type as GetMarketDepthsRequest,
  encodeBinary as encodeBinary_61,
  decodeBinary as decodeBinary_61,
  encodeJson as encodeJson_61,
} from "../../messages/api/GetMarketDepthsRequest";
import {
  Type as GetMarketDepthsStreamResponse,
  encodeBinary as encodeBinary_62,
  decodeBinary as decodeBinary_62,
  encodeJson as encodeJson_62,
} from "../../messages/api/GetMarketDepthsStreamResponse";
import {
  Type as GetTickersRequest,
  encodeBinary as encodeBinary_63,
  decodeBinary as decodeBinary_63,
  encodeJson as encodeJson_63,
} from "../../messages/api/GetTickersRequest";
import {
  Type as GetTickersStreamResponse,
  encodeBinary as encodeBinary_64,
  decodeBinary as decodeBinary_64,
  encodeJson as encodeJson_64,
} from "../../messages/api/GetTickersStreamResponse";
import {
  Type as GetTradesStreamResponse,
  encodeBinary as encodeBinary_65,
  decodeBinary as decodeBinary_65,
  encodeJson as encodeJson_65,
} from "../../messages/api/GetTradesStreamResponse";
import {
  Type as GetOrderStatusStreamRequest,
  encodeBinary as encodeBinary_66,
  decodeBinary as decodeBinary_66,
  encodeJson as encodeJson_66,
} from "../../messages/api/GetOrderStatusStreamRequest";
import {
  Type as GetOrderStatusStreamResponse,
  encodeBinary as encodeBinary_67,
  decodeBinary as decodeBinary_67,
  encodeJson as encodeJson_67,
} from "../../messages/api/GetOrderStatusStreamResponse";
import {
  Type as GetBlockStreamRequest,
  encodeBinary as encodeBinary_68,
  decodeBinary as decodeBinary_68,
  encodeJson as encodeJson_68,
} from "../../messages/api/GetBlockStreamRequest";
import {
  Type as GetBlockStreamResponse,
  encodeBinary as encodeBinary_69,
  decodeBinary as decodeBinary_69,
  encodeJson as encodeJson_69,
} from "../../messages/api/GetBlockStreamResponse";
import {
  Type as GetQuotesStreamRequest,
  encodeBinary as encodeBinary_70,
  decodeBinary as decodeBinary_70,
  encodeJson as encodeJson_70,
} from "../../messages/api/GetQuotesStreamRequest";
import {
  Type as GetQuotesStreamResponse,
  encodeBinary as encodeBinary_71,
  decodeBinary as decodeBinary_71,
  encodeJson as encodeJson_71,
} from "../../messages/api/GetQuotesStreamResponse";
import {
  Type as GetPoolReservesStreamRequest,
  encodeBinary as encodeBinary_72,
  decodeBinary as decodeBinary_72,
  encodeJson as encodeJson_72,
} from "../../messages/api/GetPoolReservesStreamRequest";
import {
  Type as GetPoolReservesStreamResponse,
  encodeBinary as encodeBinary_73,
  decodeBinary as decodeBinary_73,
  encodeJson as encodeJson_73,
} from "../../messages/api/GetPoolReservesStreamResponse";
import {
  Type as GetPricesStreamRequest,
  encodeBinary as encodeBinary_74,
  decodeBinary as decodeBinary_74,
  encodeJson as encodeJson_74,
} from "../../messages/api/GetPricesStreamRequest";
import {
  Type as GetPricesStreamResponse,
  encodeBinary as encodeBinary_75,
  decodeBinary as decodeBinary_75,
  encodeJson as encodeJson_75,
} from "../../messages/api/GetPricesStreamResponse";
import {
  Type as GetNewRaydiumPoolsRequest,
  encodeBinary as encodeBinary_76,
  decodeBinary as decodeBinary_76,
  encodeJson as encodeJson_76,
} from "../../messages/api/GetNewRaydiumPoolsRequest";
import {
  Type as GetNewRaydiumPoolsResponse,
  encodeBinary as encodeBinary_77,
  decodeBinary as decodeBinary_77,
  encodeJson as encodeJson_77,
} from "../../messages/api/GetNewRaydiumPoolsResponse";
import {
  Type as GetSwapsStreamRequest,
  encodeBinary as encodeBinary_78,
  decodeBinary as decodeBinary_78,
  encodeJson as encodeJson_78,
} from "../../messages/api/GetSwapsStreamRequest";
import {
  Type as GetSwapsStreamResponse,
  encodeBinary as encodeBinary_79,
  decodeBinary as decodeBinary_79,
  encodeJson as encodeJson_79,
} from "../../messages/api/GetSwapsStreamResponse";
import {
  fromSingle,
  first,
} from "../../runtime/async/async-generator";
import {
  wrapRpcClientImpl,
  getDevtoolsConfig,
} from "../../runtime/client-devtools";

export interface Service<TReqArgs extends any[] = [], TResArgs extends any[] = []> {
  getTransaction(request: GetTransactionRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTransactionResponse>, TResArgs>;
  postSubmitV2(request: PostSubmitRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitResponse>, TResArgs>;
  postSubmitBatchV2(request: PostSubmitBatchRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitBatchResponse>, TResArgs>;
  getRaydiumPools(request: GetRaydiumPoolsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRaydiumPoolsResponse>, TResArgs>;
  getRaydiumQuotes(request: GetRaydiumQuotesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRaydiumQuotesResponse>, TResArgs>;
  getRaydiumPrices(request: GetRaydiumPricesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRaydiumPricesResponse>, TResArgs>;
  postRaydiumSwap(request: PostRaydiumSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostRaydiumSwapResponse>, TResArgs>;
  postRaydiumRouteSwap(request: PostRaydiumRouteSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, TResArgs>;
  getJupiterQuotes(request: GetJupiterQuotesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetJupiterQuotesResponse>, TResArgs>;
  getJupiterPrices(request: GetJupiterPricesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetJupiterPricesResponse>, TResArgs>;
  postJupiterSwap(request: PostJupiterSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostJupiterSwapResponse>, TResArgs>;
  postJupiterRouteSwap(request: PostJupiterRouteSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<PostJupiterRouteSwapResponse>, TResArgs>;
  getMarketsV2(request: GetMarketsRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetMarketsResponseV2>, TResArgs>;
  getTickersV2(request: GetTickersRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetTickersResponseV2>, TResArgs>;
  getOrderbookV2(request: GetOrderbookRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetOrderbookResponseV2>, TResArgs>;
  getMarketDepthV2(request: GetMarketDepthRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetMarketDepthResponseV2>, TResArgs>;
  postOrderV2(request: PostOrderRequestV2, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postCancelOrderV2(request: PostCancelOrderRequestV2, ...args: TReqArgs): RpcReturnType<Promise<PostCancelOrderResponseV2>, TResArgs>;
  postReplaceOrderV2(request: PostReplaceOrderRequestV2, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postSettleV2(request: PostSettleRequestV2, ...args: TReqArgs): RpcReturnType<Promise<PostSettleResponse>, TResArgs>;
  getOpenOrdersV2(request: GetOpenOrdersRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetOpenOrdersResponseV2>, TResArgs>;
  getUnsettledV2(request: GetUnsettledRequestV2, ...args: TReqArgs): RpcReturnType<Promise<GetUnsettledResponse>, TResArgs>;
  getKline(request: GetKlineRequest, ...args: TReqArgs): RpcReturnType<Promise<GetKlineResponse>, TResArgs>;
  getTrades(request: GetTradesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTradesResponse>, TResArgs>;
  getServerTime(request: GetServerTimeRequest, ...args: TReqArgs): RpcReturnType<Promise<GetServerTimeResponse>, TResArgs>;
  getRecentBlockHash(request: GetRecentBlockHashRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRecentBlockHashResponse>, TResArgs>;
  getAccountBalance(request: GetAccountBalanceRequest, ...args: TReqArgs): RpcReturnType<Promise<GetAccountBalanceResponse>, TResArgs>;
  getTokenAccounts(request: GetTokenAccountsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTokenAccountsResponse>, TResArgs>;
  getOrders(request: GetOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrdersResponse>, TResArgs>;
  getOrderByID(request: GetOrderByIDRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrderByIDResponse>, TResArgs>;
  getOrderbooksStream(request: GetOrderbooksRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetOrderbooksStreamResponse>, TResArgs>;
  getMarketDepthsStream(request: GetMarketDepthsRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetMarketDepthsStreamResponse>, TResArgs>;
  getTickersStream(request: GetTickersRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetTickersStreamResponse>, TResArgs>;
  getTradesStream(request: GetTradesRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetTradesStreamResponse>, TResArgs>;
  getOrderStatusStream(request: GetOrderStatusStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetOrderStatusStreamResponse>, TResArgs>;
  getRecentBlockHashStream(request: GetRecentBlockHashRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetRecentBlockHashResponse>, TResArgs>;
  getBlockStream(request: GetBlockStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetBlockStreamResponse>, TResArgs>;
  getQuotesStream(request: GetQuotesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetQuotesStreamResponse>, TResArgs>;
  getPoolReservesStream(request: GetPoolReservesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPoolReservesStreamResponse>, TResArgs>;
  getPricesStream(request: GetPricesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPricesStreamResponse>, TResArgs>;
  getNewRaydiumPoolsStream(request: GetNewRaydiumPoolsRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetNewRaydiumPoolsResponse>, TResArgs>;
  getSwapsStream(request: GetSwapsStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetSwapsStreamResponse>, TResArgs>;
}

export type MethodDescriptors = typeof methodDescriptors;
export const methodDescriptors = {
  getTransaction: {
    methodName: "GetTransaction",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary,
      deserializeBinary: decodeBinary,
      serializeJson: (value: GetTransactionRequest) => JSON.stringify(encodeJson(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_1,
      deserializeBinary: decodeBinary_1,
      serializeJson: (value: GetTransactionResponse) => JSON.stringify(encodeJson_1(value)),
    },
  },
  postSubmitV2: {
    methodName: "PostSubmitV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_2,
      deserializeBinary: decodeBinary_2,
      serializeJson: (value: PostSubmitRequest) => JSON.stringify(encodeJson_2(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_3,
      deserializeBinary: decodeBinary_3,
      serializeJson: (value: PostSubmitResponse) => JSON.stringify(encodeJson_3(value)),
    },
  },
  postSubmitBatchV2: {
    methodName: "PostSubmitBatchV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_4,
      deserializeBinary: decodeBinary_4,
      serializeJson: (value: PostSubmitBatchRequest) => JSON.stringify(encodeJson_4(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_5,
      deserializeBinary: decodeBinary_5,
      serializeJson: (value: PostSubmitBatchResponse) => JSON.stringify(encodeJson_5(value)),
    },
  },
  getRaydiumPools: {
    methodName: "GetRaydiumPools",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_6,
      deserializeBinary: decodeBinary_6,
      serializeJson: (value: GetRaydiumPoolsRequest) => JSON.stringify(encodeJson_6(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_7,
      deserializeBinary: decodeBinary_7,
      serializeJson: (value: GetRaydiumPoolsResponse) => JSON.stringify(encodeJson_7(value)),
    },
  },
  getRaydiumQuotes: {
    methodName: "GetRaydiumQuotes",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_8,
      deserializeBinary: decodeBinary_8,
      serializeJson: (value: GetRaydiumQuotesRequest) => JSON.stringify(encodeJson_8(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_9,
      deserializeBinary: decodeBinary_9,
      serializeJson: (value: GetRaydiumQuotesResponse) => JSON.stringify(encodeJson_9(value)),
    },
  },
  getRaydiumPrices: {
    methodName: "GetRaydiumPrices",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_10,
      deserializeBinary: decodeBinary_10,
      serializeJson: (value: GetRaydiumPricesRequest) => JSON.stringify(encodeJson_10(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_11,
      deserializeBinary: decodeBinary_11,
      serializeJson: (value: GetRaydiumPricesResponse) => JSON.stringify(encodeJson_11(value)),
    },
  },
  postRaydiumSwap: {
    methodName: "PostRaydiumSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_12,
      deserializeBinary: decodeBinary_12,
      serializeJson: (value: PostRaydiumSwapRequest) => JSON.stringify(encodeJson_12(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_13,
      deserializeBinary: decodeBinary_13,
      serializeJson: (value: PostRaydiumSwapResponse) => JSON.stringify(encodeJson_13(value)),
    },
  },
  postRaydiumRouteSwap: {
    methodName: "PostRaydiumRouteSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_14,
      deserializeBinary: decodeBinary_14,
      serializeJson: (value: PostRaydiumRouteSwapRequest) => JSON.stringify(encodeJson_14(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_15,
      deserializeBinary: decodeBinary_15,
      serializeJson: (value: PostRaydiumRouteSwapResponse) => JSON.stringify(encodeJson_15(value)),
    },
  },
  getJupiterQuotes: {
    methodName: "GetJupiterQuotes",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_16,
      deserializeBinary: decodeBinary_16,
      serializeJson: (value: GetJupiterQuotesRequest) => JSON.stringify(encodeJson_16(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_17,
      deserializeBinary: decodeBinary_17,
      serializeJson: (value: GetJupiterQuotesResponse) => JSON.stringify(encodeJson_17(value)),
    },
  },
  getJupiterPrices: {
    methodName: "GetJupiterPrices",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_18,
      deserializeBinary: decodeBinary_18,
      serializeJson: (value: GetJupiterPricesRequest) => JSON.stringify(encodeJson_18(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_19,
      deserializeBinary: decodeBinary_19,
      serializeJson: (value: GetJupiterPricesResponse) => JSON.stringify(encodeJson_19(value)),
    },
  },
  postJupiterSwap: {
    methodName: "PostJupiterSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_20,
      deserializeBinary: decodeBinary_20,
      serializeJson: (value: PostJupiterSwapRequest) => JSON.stringify(encodeJson_20(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_21,
      deserializeBinary: decodeBinary_21,
      serializeJson: (value: PostJupiterSwapResponse) => JSON.stringify(encodeJson_21(value)),
    },
  },
  postJupiterRouteSwap: {
    methodName: "PostJupiterRouteSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_22,
      deserializeBinary: decodeBinary_22,
      serializeJson: (value: PostJupiterRouteSwapRequest) => JSON.stringify(encodeJson_22(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_23,
      deserializeBinary: decodeBinary_23,
      serializeJson: (value: PostJupiterRouteSwapResponse) => JSON.stringify(encodeJson_23(value)),
    },
  },
  getMarketsV2: {
    methodName: "GetMarketsV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_24,
      deserializeBinary: decodeBinary_24,
      serializeJson: (value: GetMarketsRequestV2) => JSON.stringify(encodeJson_24(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_25,
      deserializeBinary: decodeBinary_25,
      serializeJson: (value: GetMarketsResponseV2) => JSON.stringify(encodeJson_25(value)),
    },
  },
  getTickersV2: {
    methodName: "GetTickersV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_26,
      deserializeBinary: decodeBinary_26,
      serializeJson: (value: GetTickersRequestV2) => JSON.stringify(encodeJson_26(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_27,
      deserializeBinary: decodeBinary_27,
      serializeJson: (value: GetTickersResponseV2) => JSON.stringify(encodeJson_27(value)),
    },
  },
  getOrderbookV2: {
    methodName: "GetOrderbookV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_28,
      deserializeBinary: decodeBinary_28,
      serializeJson: (value: GetOrderbookRequestV2) => JSON.stringify(encodeJson_28(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_29,
      deserializeBinary: decodeBinary_29,
      serializeJson: (value: GetOrderbookResponseV2) => JSON.stringify(encodeJson_29(value)),
    },
  },
  getMarketDepthV2: {
    methodName: "GetMarketDepthV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_30,
      deserializeBinary: decodeBinary_30,
      serializeJson: (value: GetMarketDepthRequestV2) => JSON.stringify(encodeJson_30(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_31,
      deserializeBinary: decodeBinary_31,
      serializeJson: (value: GetMarketDepthResponseV2) => JSON.stringify(encodeJson_31(value)),
    },
  },
  postOrderV2: {
    methodName: "PostOrderV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_32,
      deserializeBinary: decodeBinary_32,
      serializeJson: (value: PostOrderRequestV2) => JSON.stringify(encodeJson_32(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_33,
      deserializeBinary: decodeBinary_33,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_33(value)),
    },
  },
  postCancelOrderV2: {
    methodName: "PostCancelOrderV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_34,
      deserializeBinary: decodeBinary_34,
      serializeJson: (value: PostCancelOrderRequestV2) => JSON.stringify(encodeJson_34(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_35,
      deserializeBinary: decodeBinary_35,
      serializeJson: (value: PostCancelOrderResponseV2) => JSON.stringify(encodeJson_35(value)),
    },
  },
  postReplaceOrderV2: {
    methodName: "PostReplaceOrderV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_36,
      deserializeBinary: decodeBinary_36,
      serializeJson: (value: PostReplaceOrderRequestV2) => JSON.stringify(encodeJson_36(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_33,
      deserializeBinary: decodeBinary_33,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_33(value)),
    },
  },
  postSettleV2: {
    methodName: "PostSettleV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_37,
      deserializeBinary: decodeBinary_37,
      serializeJson: (value: PostSettleRequestV2) => JSON.stringify(encodeJson_37(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_38,
      deserializeBinary: decodeBinary_38,
      serializeJson: (value: PostSettleResponse) => JSON.stringify(encodeJson_38(value)),
    },
  },
  getOpenOrdersV2: {
    methodName: "GetOpenOrdersV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_39,
      deserializeBinary: decodeBinary_39,
      serializeJson: (value: GetOpenOrdersRequestV2) => JSON.stringify(encodeJson_39(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_40,
      deserializeBinary: decodeBinary_40,
      serializeJson: (value: GetOpenOrdersResponseV2) => JSON.stringify(encodeJson_40(value)),
    },
  },
  getUnsettledV2: {
    methodName: "GetUnsettledV2",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_41,
      deserializeBinary: decodeBinary_41,
      serializeJson: (value: GetUnsettledRequestV2) => JSON.stringify(encodeJson_41(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_42,
      deserializeBinary: decodeBinary_42,
      serializeJson: (value: GetUnsettledResponse) => JSON.stringify(encodeJson_42(value)),
    },
  },
  getKline: {
    methodName: "GetKline",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_43,
      deserializeBinary: decodeBinary_43,
      serializeJson: (value: GetKlineRequest) => JSON.stringify(encodeJson_43(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_44,
      deserializeBinary: decodeBinary_44,
      serializeJson: (value: GetKlineResponse) => JSON.stringify(encodeJson_44(value)),
    },
  },
  getTrades: {
    methodName: "GetTrades",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_45,
      deserializeBinary: decodeBinary_45,
      serializeJson: (value: GetTradesRequest) => JSON.stringify(encodeJson_45(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_46,
      deserializeBinary: decodeBinary_46,
      serializeJson: (value: GetTradesResponse) => JSON.stringify(encodeJson_46(value)),
    },
  },
  getServerTime: {
    methodName: "GetServerTime",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_47,
      deserializeBinary: decodeBinary_47,
      serializeJson: (value: GetServerTimeRequest) => JSON.stringify(encodeJson_47(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_48,
      deserializeBinary: decodeBinary_48,
      serializeJson: (value: GetServerTimeResponse) => JSON.stringify(encodeJson_48(value)),
    },
  },
  getRecentBlockHash: {
    methodName: "GetRecentBlockHash",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_49,
      deserializeBinary: decodeBinary_49,
      serializeJson: (value: GetRecentBlockHashRequest) => JSON.stringify(encodeJson_49(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_50,
      deserializeBinary: decodeBinary_50,
      serializeJson: (value: GetRecentBlockHashResponse) => JSON.stringify(encodeJson_50(value)),
    },
  },
  getAccountBalance: {
    methodName: "GetAccountBalance",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_51,
      deserializeBinary: decodeBinary_51,
      serializeJson: (value: GetAccountBalanceRequest) => JSON.stringify(encodeJson_51(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_52,
      deserializeBinary: decodeBinary_52,
      serializeJson: (value: GetAccountBalanceResponse) => JSON.stringify(encodeJson_52(value)),
    },
  },
  getTokenAccounts: {
    methodName: "GetTokenAccounts",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_53,
      deserializeBinary: decodeBinary_53,
      serializeJson: (value: GetTokenAccountsRequest) => JSON.stringify(encodeJson_53(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_54,
      deserializeBinary: decodeBinary_54,
      serializeJson: (value: GetTokenAccountsResponse) => JSON.stringify(encodeJson_54(value)),
    },
  },
  getOrders: {
    methodName: "GetOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_55,
      deserializeBinary: decodeBinary_55,
      serializeJson: (value: GetOrdersRequest) => JSON.stringify(encodeJson_55(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_56,
      deserializeBinary: decodeBinary_56,
      serializeJson: (value: GetOrdersResponse) => JSON.stringify(encodeJson_56(value)),
    },
  },
  getOrderByID: {
    methodName: "GetOrderByID",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_57,
      deserializeBinary: decodeBinary_57,
      serializeJson: (value: GetOrderByIDRequest) => JSON.stringify(encodeJson_57(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_58,
      deserializeBinary: decodeBinary_58,
      serializeJson: (value: GetOrderByIDResponse) => JSON.stringify(encodeJson_58(value)),
    },
  },
  getOrderbooksStream: {
    methodName: "GetOrderbooksStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_59,
      deserializeBinary: decodeBinary_59,
      serializeJson: (value: GetOrderbooksRequest) => JSON.stringify(encodeJson_59(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_60,
      deserializeBinary: decodeBinary_60,
      serializeJson: (value: GetOrderbooksStreamResponse) => JSON.stringify(encodeJson_60(value)),
    },
  },
  getMarketDepthsStream: {
    methodName: "GetMarketDepthsStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_61,
      deserializeBinary: decodeBinary_61,
      serializeJson: (value: GetMarketDepthsRequest) => JSON.stringify(encodeJson_61(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_62,
      deserializeBinary: decodeBinary_62,
      serializeJson: (value: GetMarketDepthsStreamResponse) => JSON.stringify(encodeJson_62(value)),
    },
  },
  getTickersStream: {
    methodName: "GetTickersStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_63,
      deserializeBinary: decodeBinary_63,
      serializeJson: (value: GetTickersRequest) => JSON.stringify(encodeJson_63(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_64,
      deserializeBinary: decodeBinary_64,
      serializeJson: (value: GetTickersStreamResponse) => JSON.stringify(encodeJson_64(value)),
    },
  },
  getTradesStream: {
    methodName: "GetTradesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_45,
      deserializeBinary: decodeBinary_45,
      serializeJson: (value: GetTradesRequest) => JSON.stringify(encodeJson_45(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_65,
      deserializeBinary: decodeBinary_65,
      serializeJson: (value: GetTradesStreamResponse) => JSON.stringify(encodeJson_65(value)),
    },
  },
  getOrderStatusStream: {
    methodName: "GetOrderStatusStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_66,
      deserializeBinary: decodeBinary_66,
      serializeJson: (value: GetOrderStatusStreamRequest) => JSON.stringify(encodeJson_66(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_67,
      deserializeBinary: decodeBinary_67,
      serializeJson: (value: GetOrderStatusStreamResponse) => JSON.stringify(encodeJson_67(value)),
    },
  },
  getRecentBlockHashStream: {
    methodName: "GetRecentBlockHashStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_49,
      deserializeBinary: decodeBinary_49,
      serializeJson: (value: GetRecentBlockHashRequest) => JSON.stringify(encodeJson_49(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_50,
      deserializeBinary: decodeBinary_50,
      serializeJson: (value: GetRecentBlockHashResponse) => JSON.stringify(encodeJson_50(value)),
    },
  },
  getBlockStream: {
    methodName: "GetBlockStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_68,
      deserializeBinary: decodeBinary_68,
      serializeJson: (value: GetBlockStreamRequest) => JSON.stringify(encodeJson_68(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_69,
      deserializeBinary: decodeBinary_69,
      serializeJson: (value: GetBlockStreamResponse) => JSON.stringify(encodeJson_69(value)),
    },
  },
  getQuotesStream: {
    methodName: "GetQuotesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_70,
      deserializeBinary: decodeBinary_70,
      serializeJson: (value: GetQuotesStreamRequest) => JSON.stringify(encodeJson_70(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_71,
      deserializeBinary: decodeBinary_71,
      serializeJson: (value: GetQuotesStreamResponse) => JSON.stringify(encodeJson_71(value)),
    },
  },
  getPoolReservesStream: {
    methodName: "GetPoolReservesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_72,
      deserializeBinary: decodeBinary_72,
      serializeJson: (value: GetPoolReservesStreamRequest) => JSON.stringify(encodeJson_72(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_73,
      deserializeBinary: decodeBinary_73,
      serializeJson: (value: GetPoolReservesStreamResponse) => JSON.stringify(encodeJson_73(value)),
    },
  },
  getPricesStream: {
    methodName: "GetPricesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_74,
      deserializeBinary: decodeBinary_74,
      serializeJson: (value: GetPricesStreamRequest) => JSON.stringify(encodeJson_74(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_75,
      deserializeBinary: decodeBinary_75,
      serializeJson: (value: GetPricesStreamResponse) => JSON.stringify(encodeJson_75(value)),
    },
  },
  getNewRaydiumPoolsStream: {
    methodName: "GetNewRaydiumPoolsStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_76,
      deserializeBinary: decodeBinary_76,
      serializeJson: (value: GetNewRaydiumPoolsRequest) => JSON.stringify(encodeJson_76(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_77,
      deserializeBinary: decodeBinary_77,
      serializeJson: (value: GetNewRaydiumPoolsResponse) => JSON.stringify(encodeJson_77(value)),
    },
  },
  getSwapsStream: {
    methodName: "GetSwapsStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_78,
      deserializeBinary: decodeBinary_78,
      serializeJson: (value: GetSwapsStreamRequest) => JSON.stringify(encodeJson_78(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_79,
      deserializeBinary: decodeBinary_79,
      serializeJson: (value: GetSwapsStreamResponse) => JSON.stringify(encodeJson_79(value)),
    },
  },
} as const;

export class RpcError<TTrailer = any> extends Error {
  constructor(public trailer: TTrailer) { super(); }
}
export interface CreateServiceClientConfig {
  responseOnly?: boolean;
  devtools?: true | { tags: string[] };
}
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config?: undefined
): Service<[] | [TMetadata], []>;
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config: CreateServiceClientConfig & { responseOnly: false }
): Service<[] | [TMetadata], [THeader, Promise<TTrailer>]>;
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config: CreateServiceClientConfig & { responseOnly?: true }
): Service<[] | [TMetadata], []>;
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config?: CreateServiceClientConfig
): Service<[] | [TMetadata], [] | [THeader, Promise<TTrailer>]> {
  let _rpcClientImpl = rpcClientImpl;
  const responseOnly = config?.responseOnly ?? true;
  const devtools = config?.devtools ?? false;
  if (devtools) {
    const tags = devtools === true ? [] : devtools.tags;
    const devtoolsConfig = getDevtoolsConfig();
    _rpcClientImpl = wrapRpcClientImpl({ rpcClientImpl, devtoolsConfig, tags });
  }
  return Object.fromEntries(Object.entries(methodDescriptors).map(
    ([camelRpcName, methodDescriptor]) => {
      const { requestStream, responseStream } = methodDescriptor;
      const rpcMethodImpl = _rpcClientImpl(methodDescriptor as MethodDescriptor<any, any>);
      const rpcMethodHandler = async (request: any, metadata?: any) => {
        const reqAsyncGenerator = requestStream ? request : fromSingle(request);
        const rpcMethodResult = rpcMethodImpl(reqAsyncGenerator, metadata);
        const resAsyncGenerator = rpcMethodResult[0];
        const headerPromise = rpcMethodResult[1];
        const trailerPromise = rpcMethodResult[2];
        const [header, response] = await Promise.all([
          getHeaderBeforeTrailer(headerPromise, trailerPromise),
          responseStream ? resAsyncGenerator : first(resAsyncGenerator),
        ]);
        return responseOnly ? response : [response, header, trailerPromise];
      };
      return [camelRpcName, rpcMethodHandler];
    }
  )) as unknown as Service;
}
function getHeaderBeforeTrailer<THeader, TTrailer>(
  headerPromise: Promise<THeader>,
  trailerPromise: Promise<TTrailer>
): Promise<THeader> {
  return Promise.race([
    headerPromise,
    trailerPromise.then(trailer => { throw new RpcError(trailer); }),
  ]);
}
