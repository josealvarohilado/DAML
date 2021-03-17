// Generated from User.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Message = {
  sender: damlTypes.Party;
  receiver: damlTypes.Party;
  content: string;
};

export declare const Message:
  damlTypes.Template<Message, undefined, 'c10ffcbec5f667b29f7517c8546dbdd1e0a3a1f729865b768372705b5d8b2a42:User:Message'> & {
  Archive: damlTypes.Choice<Message, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Message {
  export type CreateEvent = damlLedger.CreateEvent<Message, undefined, typeof Message.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Message, typeof Message.templateId>
  export type Event = damlLedger.Event<Message, undefined, typeof Message.templateId>
  export type QueryResult = damlLedger.QueryResult<Message, undefined, typeof Message.templateId>
}



export declare type SendMessage = {
  sender: damlTypes.Party;
  content: string;
};

export declare const SendMessage:
  damlTypes.Serializable<SendMessage> & {
  }
;


export declare type Follow = {
  userToFollow: damlTypes.Party;
};

export declare const Follow:
  damlTypes.Serializable<Follow> & {
  }
;


export declare type User = {
  username: damlTypes.Party;
  following: damlTypes.Party[];
};

export declare const User:
  damlTypes.Template<User, User.Key, 'c10ffcbec5f667b29f7517c8546dbdd1e0a3a1f729865b768372705b5d8b2a42:User:User'> & {
  Archive: damlTypes.Choice<User, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, User.Key>;
  Follow: damlTypes.Choice<User, Follow, damlTypes.ContractId<User>, User.Key>;
  SendMessage: damlTypes.Choice<User, SendMessage, damlTypes.ContractId<Message>, User.Key>;
};

export declare namespace User {
  export type Key = damlTypes.Party
  export type CreateEvent = damlLedger.CreateEvent<User, User.Key, typeof User.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<User, typeof User.templateId>
  export type Event = damlLedger.Event<User, User.Key, typeof User.templateId>
  export type QueryResult = damlLedger.QueryResult<User, User.Key, typeof User.templateId>
}


