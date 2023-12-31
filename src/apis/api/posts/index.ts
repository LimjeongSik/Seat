import { api } from "../../instance.api";

// 타입
import { PatchPost, Post } from "@/interface";

// 포스트 가져오기
export async function getPosts() {
    const response = await api.get("/posts");

    return response.data as Post[];
}

// 특정 포스트 가져오기
export async function getPost(id: number) {
    const response = await api.get(`/posts/${id}`);

    return response.data as Post;
}

// 포스트 생성하기
export async function createPost(post: Post) {
    const response = await api.post("/posts", post);

    return response.data as Post;
}

// 포스트 수정하기
export async function patchPost(id: number, post: PatchPost) {
    const response = await api.patch(`/posts/${id}`, post);

    return response.data as Post;
}

// 포스트 삭제하기
export async function deletePost(id: number) {
    const respone = await api.delete(`/posts/${id}`);

    return respone.data as Post[];
}
