import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import MyBreadCrumb from "./../my-components/myBreadCrumb";
import Title from "./../my-components/title";
import articles from "../../data/articles.json";
import { Article } from "@/types/article";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

// Định nghĩa kiểu cho props của code component
interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/hdev-blog/lessons/${id}.md`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching Markdown:", error);
      }
    };

    fetchMarkdown();
  }, [id]);

  const article = (articles as Article[]).find((a) => a.id === id);
  if (!article) {
    return <div>Bài viết không tồn tại.</div>;
  }

  const title = article.title;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      toast("Đã sao chép mã thành công!");
    });
  };

  return (
    <div>
      <MyBreadCrumb currentPage={title} />
      <Title title={title} />
      <div className="prose max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }: CodeProps) {
              const match = /language-(\w+)/.exec(className || "");
              const codeString = String(children).replace(/\n$/, "");

              return !inline && match ? (
                <div className="relative">
                  <SyntaxHighlighter
                    style={oneLight as { [key: string]: React.CSSProperties }}
                    language={match[1]}
                    PreTag="div"
                    className="mt-4 mb-6 rounded-4xl!important"
                    {...props}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                  <button
                    onClick={() => handleCopy(codeString)}
                    className="cursor-pointer absolute top-2 right-2 bg-gray-300 text-white px-2 py-1 rounded-md hover:bg-gray-600 transition"
                  >
                    Copy
                  </button>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ArticlePage;
