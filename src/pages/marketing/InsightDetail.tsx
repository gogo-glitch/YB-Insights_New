import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { posts } from "@/data/insights";

const InsightDetail = () => {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="container py-24">
        <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to insights
        </Link>
        <div className="mt-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Not found</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mt-4">
            This insight is not available.
          </h1>
          <p className="text-muted-foreground mt-5">
            The article may have moved, or the link may be incomplete.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="container pt-14 pb-12">
        <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to insights
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 items-end mt-10">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="text-primary uppercase tracking-[0.18em] font-medium">{post.cat}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.read}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-5">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
              {post.excerpt}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-border/60 aspect-[4/3]">
              <img src={post.img} alt={post.title} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <article className="border-t border-border/60">
        <div className="container py-16">
          <div className="mx-auto max-w-3xl space-y-7 text-lg leading-8 text-foreground/85">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default InsightDetail;
