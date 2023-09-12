import { randomUUID } from 'node:crypto';

import { Replace } from '../helpers/types';

interface TodoProps {
  content: string;
  completed: boolean;
}

export class Todo {
  private _id: string;
  private props: TodoProps;

  constructor(props: Replace<TodoProps, { completed?: boolean }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      completed: props.completed || false,
    };
  }

  public get id() {
    return this._id;
  }

  public get content() {
    return this.props.content;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get completed() {
    return this.props.completed;
  }

  public set completed(completed: boolean) {
    this.props.completed = completed;
  }

  public toggle() {
    this.props.completed = !this.props.completed;
  }
}
