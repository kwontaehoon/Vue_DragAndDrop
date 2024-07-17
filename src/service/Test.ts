import { client } from "@/service";

const TEST_URL = {
    data: '/api/board/totalBoardList'
}

export const getTestBoardList = () => client.get(TEST_URL.data);