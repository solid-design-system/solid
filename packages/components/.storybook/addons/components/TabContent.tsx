import React, { memo, useCallback, useEffect, useState } from "react";
import { styled } from "@storybook/theming";
import { H1, Link, Code, Form } from "@storybook/components";
import { PARAM_KEY, TOOL_ID } from "../constants";

import { useGlobals, useParameter } from "@storybook/manager-api";

const { Field, Select, Button, Input, Textarea } = Form;

const TabWrapper = styled.div(({ theme }) => ({
  background: theme.background.content,
  padding: "4rem 20px",
  minHeight: "100vh",
  boxSizing: "border-box",
}));

const TabInner = styled.div({
  maxWidth: 768,
  marginLeft: "auto",
  marginRight: "auto",
});

interface TabContentProps {
  code: string;
}

export const TabContent: React.FC<TabContentProps> = ({ code }) => {
  const [globals, updateGlobals] = useGlobals();

  const isActive = globals[PARAM_KEY];

  const toggleMyTool = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: !isActive
    });
  }, [isActive]);

  const paramData = useParameter<string>(PARAM_KEY + '_CONTENT', "");

  return (
    <TabWrapper>
      <TabInner>
        <H1>Theme Editor</H1>
        <Code>{paramData}</Code>
        <Textarea
          key={TOOL_ID + 'text'}
          onChange={(e) => {
            updateGlobals({
              [PARAM_KEY + '_CONTENT']: e.target.value
            });
          }}
        >
          {globals[PARAM_KEY + '_CONTENT']}
        </Textarea>
        <Button active={isActive} key={TOOL_ID + 'toggle'} onClick={toggleMyTool}>
          {isActive ? "Disable Theme" : "Enable Theme"}
        </Button>
      </TabInner>
    </TabWrapper>
  );
};
