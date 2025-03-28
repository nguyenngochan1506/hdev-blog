import MyBreadCrumb from "../my-components/myBreadCrumb";
import Title from "../my-components/title";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import articles from "../../data/articles.json"; // Giả sử bạn có một file JSON chứa danh sách bài viết
import { Article } from "@/types/article";
import { Link } from "react-router-dom";

const SpringBootPage = () => {
  const title = "Spring Boot Cây Nhà Lá Vườn...";

  // Danh sách bài viết
  const articlesList = articles as Article[];

  return (
    <div>
      {/* Breadcrumb */}
      <MyBreadCrumb currentPage={title} />
      <Title title={title} />

      {/* Mô tả ngắn */}
      <p className="text-muted-foreground mb-4">
        Đây là danh sách các bài viết về Spring Boot. Mỗi bài viết sẽ cung cấp
        thông tin về các chủ đề khác nhau liên quan đến Spring Boot, từ cơ bản
        đến nâng cao. Bạn có thể tìm thấy các bài viết về cách sử dụng Spring
        Boot, các mẫu thiết kế, các công cụ hỗ trợ, và nhiều hơn nữa...ss
      </p>

      {/* Danh sách bài viết */}
      <div className="space-y-6">
        {articlesList.map((article) => (
          <Card key={article.id} className="flex flex-col sm:flex-row">
            {/* Hình ảnh */}
            <div className="sm:w-1/3 ">
              <img
                src={article.image}
                alt={article.title}
                className="max-h-32 w-full object-cover sm:h-full sm:rounded-l-lg"
              />
            </div>

            {/* Nội dung */}
            <div className="sm:w-2/3 flex flex-col justify-between p-4">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {article.author}
                  </span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">
                    {article.date}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-primary hover:underline">
                  <Link to={`${article.id}`}>{article.title}</Link>
                </h2>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>

              <CardFooter className="flex justify-between items-center mt-2">
                <div className="flex space-x-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SpringBootPage;
