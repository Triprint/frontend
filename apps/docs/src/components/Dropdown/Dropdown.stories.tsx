import { useCallback } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { Dropdown, Button, Flex } from '@triprint/ui';

import { numberArgType, selectArgType } from '../../utils';
import docs from './Dropdown.docs.mdx';

export default {
  title: 'Components/Dropdown',
  component: Dropdown.Content,
  argTypes: {
    side: selectArgType('Dropdown 위치', ['top', 'left', 'right', 'bottom'], 'bottom'),
    sideOffset: numberArgType('Trigger와 Content간의 Offset', 0),
    align: selectArgType('Dropdown 정렬 위치', ['start', 'end', 'center'], 'center'),
    alignOffset: numberArgType('정렬될 때 움직이는 Offset', 0),
    size: selectArgType('Dropdown 크기', ['sm', 'md', 'lg', 'xl'], 'md'),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof Dropdown.Content>;

export const Base: ComponentStory<typeof Dropdown.Content> = ({ ...args }) => {
  const [radio, setRadio] = useState<string>('first');
  const [checkbox, setCheckbox] = useState<Record<number, boolean | undefined>>({ 1: true });

  const toggleCheckbox = useCallback((key: number) => {
    return () =>
      setCheckbox((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
  }, []);

  return (
    <Dropdown.Root>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>Open Dropdown</Button>
        </Dropdown.Trigger>
        <Dropdown.Content {...args}>
          <Dropdown.Group>
            <Dropdown.Label>기본</Dropdown.Label>
            <Dropdown.Item>내 정보</Dropdown.Item>
            <Dropdown.Item>로그아웃</Dropdown.Item>
          </Dropdown.Group>

          <Dropdown.Separator />

          <Dropdown.Group>
            <Dropdown.Label>Checkbox</Dropdown.Label>
            <Dropdown.CheckboxItem checked={checkbox[1]} onSelect={toggleCheckbox(1)}>
              1st Checkbox
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem checked={checkbox[2]} onSelect={toggleCheckbox(2)}>
              2nd Checkbox
            </Dropdown.CheckboxItem>
            <Dropdown.CheckboxItem disabled>3rd Checkbox</Dropdown.CheckboxItem>
          </Dropdown.Group>

          <Dropdown.Separator />

          <Dropdown.Label>Radio</Dropdown.Label>
          <Dropdown.RadioGroup value={radio} onValueChange={setRadio}>
            <Dropdown.RadioItem value="first">1st Radio</Dropdown.RadioItem>
            <Dropdown.RadioItem value="second">2nd Radio</Dropdown.RadioItem>
            <Dropdown.RadioItem disabled value="third">
              3rd Radio
            </Dropdown.RadioItem>
          </Dropdown.RadioGroup>
        </Dropdown.Content>
      </Dropdown.Root>
    </Dropdown.Root>
  );
};

const SampleDropdownContent: ComponentStory<typeof Dropdown.Content> = ({ ...props }) => {
  return (
    <Dropdown.Content {...props}>
      <Dropdown.Group>
        <Dropdown.Label>기본</Dropdown.Label>
        <Dropdown.Item>내 정보</Dropdown.Item>
        <Dropdown.Item>로그아웃</Dropdown.Item>
      </Dropdown.Group>

      <Dropdown.Separator />

      <Dropdown.Group>
        <Dropdown.Label>Checkbox</Dropdown.Label>
        <Dropdown.CheckboxItem>1st Checkbox</Dropdown.CheckboxItem>
        <Dropdown.CheckboxItem checked>2nd Checkbox</Dropdown.CheckboxItem>
        <Dropdown.CheckboxItem disabled>3rd Checkbox</Dropdown.CheckboxItem>
      </Dropdown.Group>
    </Dropdown.Content>
  );
};

export const Side = () => {
  return (
    <Flex align="center" justify="evenly">
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>Top</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent side="top" />
      </Dropdown.Root>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>Right</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent side="right" />
      </Dropdown.Root>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>Bottom(Default)</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent />
      </Dropdown.Root>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>Left</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent side="left" />
      </Dropdown.Root>
    </Flex>
  );
};

export const Align = () => {
  return (
    <Flex align="center" justify="evenly">
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>Start</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent align="start" />
      </Dropdown.Root>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>Center (Default)</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent />
      </Dropdown.Root>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>End</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent align="end" />
      </Dropdown.Root>
    </Flex>
  );
};

export const Size = () => {
  return (
    <Flex align="center" justify="evenly">
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>sm</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent size="sm" />
      </Dropdown.Root>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>md (Default)</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent />
      </Dropdown.Root>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>lg</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent size="lg" />
      </Dropdown.Root>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button>xl</Button>
        </Dropdown.Trigger>
        <SampleDropdownContent size="xl" />
      </Dropdown.Root>
    </Flex>
  );
};
