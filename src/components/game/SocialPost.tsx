
interface SocialPostProps {
  post: {
    title: string;
    source: string;
    time: string;
    content: string;
    likes: string;
    shares: string;
    comments: string;
  };
}

const SocialPost = ({ post }:SocialPostProps) => {
    return (
      <div className="social-post bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <i className="fas fa-exclamation-triangle text-red-500"></i>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{post.title}</h3>
            <p className="text-sm text-gray-500">Posted by {post.source} | {post.time}</p>
          </div>
        </div>
        
        <p className="text-gray-800 mb-4">{post.content}</p>
        
        <div className="flex space-x-6 text-sm text-gray-500 border-t border-gray-100 pt-3">
          <span><i className="far fa-thumbs-up mr-1"></i> {post.likes} Likes</span>
          <span><i className="fas fa-share mr-1"></i> {post.shares} Shares</span>
          <span><i className="far fa-comment mr-1"></i> {post.comments} Comments</span>
        </div>
      </div>
    );
  };
  
  export default SocialPost;