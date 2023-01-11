import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex, Slide } from '@triprint/ui';

import { booleanArgType, numberArgType } from '../../utils';
import docs from './Slide.docs.mdx';

export default {
  title: 'Components/Slide',
  component: Slide.Root,
  argTypes: {
    loop: booleanArgType('전체 Slide를 Loop 여부', false),
    slidesPerView: numberArgType('한 페이지에 보여질 Slide 개수', 1),
    spaceBetween: numberArgType('Slide 간 간격', 0),
    width: numberArgType('Slide width'),
    height: numberArgType('Slide height'),
    pagination: booleanArgType('Pagination을 보여줄지 여부', true),
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
} as ComponentMeta<typeof Slide.Root>;

const sampleImages = [
  'https://images.unsplash.com/photo-1671742554831-ed5ac6a0f45f?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1671634966507-0e2973e15d88?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1671468158415-2f5eaa0bb061?auto=format&fit=crop&w=1400&q=80',
];

const SampleSlideItem = ({ src }: { src: string }) => {
  return (
    <Flex
      as="img"
      src={src}
      align="center"
      justify="center"
      css={{
        width: '$full',
        height: '$full',
        backgroundColor: '$surfaceVariant',
        objectFit: 'cover',
        aspectRatio: '1/1',
      }}
    />
  );
};

export const Base: ComponentStory<typeof Slide.Root> = (args) => {
  return (
    <Flex align="center" justify="center">
      <Slide.Root width={480} {...args}>
        {sampleImages.map((src) => (
          <Slide.Item key={src}>
            <SampleSlideItem src={src} />
          </Slide.Item>
        ))}
        <Slide.Navigation />
      </Slide.Root>
    </Flex>
  );
};

Base.args = {
  slidesPerView: 1,
  loop: false,
  pagination: true,
};
