import { sanitize } from "isomorphic-dompurify";
import { cn } from "@/lib/utils";

interface ServerHTMLRendererProps {
  content: string;
  className?: string;
}

export default function ServerHTMLRenderer({
  content,
  className,
}: ServerHTMLRendererProps) {
  const sanitizedContent = sanitize(content);

  return (
    <div
      className={cn(
        "prose max-w-none prose-slate  dark:prose-invert",
        className
      )}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
