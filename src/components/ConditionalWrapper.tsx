interface IProps {
  condition: Boolean;
  wrapper(children: React.ReactNode): any;
  children: React.ReactNode;
}

export default function ConditionalWrapper({
  condition,
  wrapper,
  children,
}: IProps) {
  return condition ? wrapper(children) : children;
}
