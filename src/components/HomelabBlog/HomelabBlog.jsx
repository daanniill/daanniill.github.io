import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./HomelabBlog.css";

const BLOG_BASE = "https://daanniill.github.io/homelab-blog";

function formatDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPost({ post, onBack }) {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadPost() {
      try {
        setStatus("loading");

        const response = await fetch(
          `${BLOG_BASE}/posts/${post.file}`,
          { cache: "no-cache" }
        );

        if (!response.ok) {
          throw new Error(`Could not load post: ${response.status}`);
        }

        const markdown = await response.text();

        if (!cancelled) {
          setContent(markdown);
          setStatus("ready");
        }
      } catch (error) {
        console.error(error);

        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    loadPost();

    return () => {
      cancelled = true;
    };
  }, [post]);

  return (
    <article className="blog-post">
      <button className="blog-back-button" onClick={onBack}>
        ← Back to homelab notes
      </button>

      <div className="blog-post-meta">
        <span>{formatDate(post.date)}</span>

        <div className="blog-tags">
          {post.tags.map((tag) => (
            <span className="blog-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {status === "loading" && <p>Loading article...</p>}

      {status === "error" && (
        <p className="blog-error">
          The article could not be loaded.
        </p>
      )}

      {status === "ready" && (
        <div className="blog-post-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt, ...props }) => {
                const imageSource =
                  src?.startsWith("http") || src?.startsWith("/")
                    ? src
                    : `${BLOG_BASE}/posts/${src}`;

                return (
                  <img
                    src={imageSource}
                    alt={alt ?? ""}
                    loading="lazy"
                    {...props}
                  />
                );
              },
              a: ({ href, children, ...props }) => (
                <a
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  {...props}
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      )}
    </article>
  );
}

function HomelabBlog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      try {
        const response = await fetch(
          `${BLOG_BASE}/posts/index.json`,
          { cache: "no-cache" }
        );

        if (!response.ok) {
          throw new Error(`Could not load posts: ${response.status}`);
        }

        const data = await response.json();

        const sortedPosts = [...data].sort((a, b) =>
          b.date.localeCompare(a.date)
        );

        if (!cancelled) {
          setPosts(sortedPosts);
          setStatus("ready");
        }
      } catch (error) {
        console.error(error);

        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    loadPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  function openPost(post) {
    setSelectedPost(post);
    window.location.hash = "homelab";
  }

  if (selectedPost) {
    return (
      <section className="homelab-blog" id="homelab">
        <BlogPost
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
        />
      </section>
    );
  }

  return (
    <section className="homelab-blog" id="homelab">
      <div className="blog-section-header">
        <p className="blog-label">LAB NOTEBOOK</p>
        <h2>Homelab Notes</h2>

        <p className="blog-introduction">
          Notes from my experiments with Proxmox, networking, Linux,
          self-hosting, and enterprise hardware.
        </p>
      </div>

      {status === "loading" && <p>Loading notes...</p>}

      {status === "error" && (
        <p className="blog-error">
          Homelab notes could not be loaded.
        </p>
      )}

      {status === "ready" && (
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-card-meta">
                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </div>

              <h3>{post.title}</h3>
              <p>{post.summary}</p>

              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span className="blog-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="blog-read-button"
                onClick={() => openPost(post)}
              >
                Read note →
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default HomelabBlog;