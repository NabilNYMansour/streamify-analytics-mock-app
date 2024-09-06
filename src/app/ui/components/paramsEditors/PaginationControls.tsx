"use client";

import { Group, Pagination } from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const PaginationControls = ({ currentPage, pagesCount }: { currentPage: number, pagesCount: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePageChange = (newPage: number, scroll: boolean) => {
    const params = new URLSearchParams(searchParams);
    const page = Math.max(Math.min(newPage, pagesCount), 1); // minimum of 1 and maximum of pagesCount
    params.set('page', page.toString());
    replace(`${pathname}?${params.toString()}`, { scroll });
  }

  useEffect(() => {
    handlePageChange(currentPage, false);
  });

  return <Pagination.Root
    disabled={pagesCount === 0} total={pagesCount} value={currentPage}
    siblings={1} size="sm"
    onChange={(newPage) => {
      handlePageChange(newPage, true);
    }}>
    <Group justify="center" gap={5}>
      <Pagination.First aria-label="Go to first page" />
      <Pagination.Previous aria-label="Go to previous page" />
      <Pagination.Items />
      <Pagination.Next aria-label="Go to next page" />
      <Pagination.Last aria-label="Go to last page" />
    </Group>
  </Pagination.Root>
}

export default PaginationControls;