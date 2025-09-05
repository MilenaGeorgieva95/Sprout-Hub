import { capitalize } from "../../../utils/capitalize";

export default function CommentsSection({ commentsData }) {
  return (
    <ul
      role="list"
      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
    >
      {commentsData.map((comment) => (
        <li
          key={comment.objectId}
          style={
            comment.pending
              ? {
                  backgroundColor: "#d4d5d6",
                  borderRadius: "20px",
                  opacity: "75%",
                }
              : null
          }
        >
          <div className="flex items-center gap-x-6">
            <img
              alt="author-avatar-image"
              src={comment.author?.avatarUrl}
              className="size-18 rounded-full"
            />
            <div>
              <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                {capitalize(comment.author?.username)}
              </h3>
              <p className="text-sm/6 font-semibold text-indigo-600">
                {comment.content}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
