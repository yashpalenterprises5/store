"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, Mail, Share2Icon, Twitter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ShareMenu = () => {
  const currentUrl = window.location.href;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant="outline">
          <Share2Icon
            aria-label="share"
            className="text-accent-foreground w-4 h-4"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Share</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Email Share */}
        <DropdownMenuItem asChild>
          <a
            href={`mailto:?subject=Check this out&body=Check out this link: ${currentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-4 h-4 mr-2" /> Share via Email
          </a>
        </DropdownMenuItem>

        {/* Twitter Share */}
        <DropdownMenuItem asChild>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4 mr-2" /> Share on Twitter
          </a>
        </DropdownMenuItem>

        {/* Copy Link */}
        <DropdownMenuItem onClick={copyToClipboard}>
          <Link className="w-4 h-4 mr-2" />{" "}
          {copied ? "Link Copied!" : "Copy Link"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareMenu;
