"use client";

import { Flex, Select, Text } from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const PageLimitControls = ({ limit }: { limit: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleLimitChange = (limit: number) => {
    const params = new URLSearchParams(searchParams);
    if (limit === 10) {
      params.delete('limit');
    } else {
      params.set('limit', limit.toString());
    }
    replace(`${pathname}?${params.toString()}`, { scroll: true });
  }

  useEffect(() => {
    handleLimitChange(limit);
  });

  return (
    <Flex gap={10} align="center">
      <Text fs="italic" c="dimmed" size="xs">Results per page</Text>
      <Select
        w={60}
        size="xs"
        checkIconPosition="right"
        placeholder="Limit"
        allowDeselect={false}
        onChange={(value) => handleLimitChange(Number(value))}
        defaultValue={limit.toString()}
        data={['10', '20', '30', '40', '50']}
        comboboxProps={{
          transitionProps: { transition: 'fade', duration: 200 },
        }}

      />
    </Flex>
  );
};

export default PageLimitControls;