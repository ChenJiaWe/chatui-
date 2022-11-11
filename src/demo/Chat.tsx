import React from "react";
import { DemoPage, DemoSection } from "../components";
import chatAvatar from "../assets/avatar.png";
import meAvatar from "../assets/me.png";
import guessImg from "../assets/guess.png";
import functionImg from "../assets/function.png";
import loginImg from "../assets/login.png";
import questionImg from "../assets/question.png";
import moreImg from "../assets/more.png";
import robotImg from "../assets/robot.png";
import Chat, {
  Bubble,
  MessageProps,
  useMessages,
  QuickReplyItemProps,
  useQuickReplies,
  Card,
  CardTitle,
  CardText,
  List,
  ListItem,
  Flex,
  FlexItem,
  ScrollView,
  ToolbarItemProps,
  Image,
  CardMedia,
} from "@chatui/core";
import OrderSelector from "./OrdderSelector";
import { useNavigate } from "react-router-dom";
import { request } from "../utils/constant";

type MessageWithoutId = Omit<MessageProps, "_id">;

// fetch("http://150.158.33.124:1234/faq/management/list", {
//   method: "GET",
//   cache: "no-cache",
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const data = await request({
  url: "/management/list",
  method: "get",
});
console.log(data);

const skillArr = [
  {
    title: "登录问题",
    src: loginImg,
  },
  {
    title: "功能问题",
    src: functionImg,
  },
  {
    title: "问题分类",
    src: questionImg,
  },
  {
    title: "更多问题",
    src: moreImg,
  },
];

const initialMessages: MessageWithoutId[] = [
  {
    type: "help",
    content: { text: "88VIP专属智能客服小蜜 为您服务" },
  },

  {
    type: "skill-cards",
  },
  {
    type: "guess-you",
    user: {
      avatar: chatAvatar,
    },
    createdAt: Date.now(),
    hasTime: true,
  },
  {
    type: "text",
    content: { text: "小蜜我要查看我的物流信息" },
    position: "right",
    user: {
      avatar: meAvatar,
    },
  },
  {
    type: "system",
    content: {
      text: "由于您长时间未说话或退出小蜜（离开页面、锁屏等）已自动结束本次服务",
    },
  },
];

const defaultQuickReplies = [
  {
    icon: "keyboard-circle",
    name: "服务评价",
    code: "evaluation",
    isHighlight: true,
  },
];

const toolbar = [
  {
    type: "smile",
    icon: "smile",
    title: "表情",
  },
  {
    type: "orderSelector",
    icon: "shopping-bag",
    title: "宝贝",
  },
  {
    type: "image",
    icon: "image",
    title: "图片",
  },
  {
    type: "camera",
    icon: "camera",
    title: "拍照",
  },
  {
    type: "photo",
    title: "Photo",
    img: "https://gw.alicdn.com/tfs/TB1eDjNj.T1gK0jSZFrXXcNCXXa-80-80.png",
  },
];

export default () => {
  // 消息列表
  const { messages, appendMsg, setTyping, prependMsgs } =
    useMessages(initialMessages);
  const { quickReplies, replace } = useQuickReplies(defaultQuickReplies);
  const msgRef = React.useRef(null);
  const navigate = useNavigate();

  window.appendMsg = appendMsg;
  window.msgRef = msgRef;

  // 发送回调
  function handleSend(type: string, val: string) {
    if (type === "text" && val.trim()) {
      // TODO: 发送请求
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      setTimeout(() => {
        setTyping(true);
      }, 10);

      // 模拟回复消息
      setTimeout(() => {
        appendMsg({
          type: "text",
          content: { text: "暂时无法解答，您可以反馈问题，开发会及时帮您解决" },
        });
      }, 1000);
    }
  }

  // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
  function handleQuickReplyClick(item: QuickReplyItemProps) {
    handleSend("text", item.name);

    if (item.code === "q1") {
      replace([
        {
          name: "短语a",
          code: "qa",
          isHighlight: true,
        },
        {
          name: "短语b",
          code: "qb",
        },
      ]);
    } else if (item.code === "orderSelector") {
      appendMsg({
        type: "order-selector",
        content: {},
      });
    }
  }

  function handleRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const now = Date.now();

        prependMsgs([
          {
            _id: now + "1111",
            type: "text",
            content: {
              text: "11111Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "2222",
            type: "text",
            content: {
              text: "22222 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "3333",
            type: "text",
            content: {
              text: "333 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "4444",
            type: "text",
            content: {
              text: "444 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "5555",
            type: "text",
            content: {
              text: "555 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "6666",
            type: "text",
            content: {
              text: "666 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
          {
            _id: now + "7777",
            type: "text",
            content: {
              text: "777 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~",
            },
            user: {
              avatar:
                "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
            },
          },
        ]);
        resolve({});
      }, 800);
    });
  }

  function handleToolbarClick(item: ToolbarItemProps) {
    if (item.type === "orderSelector") {
      appendMsg({
        type: "order-selector",
        content: {},
      });
    }
  }

  function renderMessageContent(msg: MessageProps) {
    const { type, content } = msg;
    // 根据消息类型来渲染
    switch (type) {
      case "help":
        return (
          <div
            style={{
              display: "flex",
              width: "100%",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 16,
                }}
              >
                您好，请问有什么可以帮助您？
              </h3>
              <span
                style={{
                  fontSize: 14,
                  color: "#777",
                }}
              >
                智能小歌为您
              </span>
            </div>
            <Image src={robotImg} />
          </div>
        );
      case "text":
        return <Bubble content={content.text} />;
      case "guess-you":
        return (
          <Card fluid>
            <Flex>
              <div className="guess-you-aside">
                <h1>猜你想问</h1>
                <Image
                  className="guess-you-aside-img"
                  src={guessImg}
                  alt="图片名"
                />
              </div>
              <FlexItem>
                <List>
                  <ListItem
                    content="登录遇到问题"
                    as="a"
                    rightIcon="chevron-right"
                  />
                  <ListItem
                    content="登录遇到问题"
                    as="a"
                    rightIcon="chevron-right"
                  />
                  <ListItem
                    content="登录遇到问题"
                    as="a"
                    rightIcon="chevron-right"
                  />
                  <ListItem
                    content="我遇到了其他问题"
                    as="a"
                    rightIcon="chevron-right"
                  />
                  <ListItem
                    content="我遇到了其他问题"
                    as="a"
                    rightIcon="chevron-right"
                  />
                </List>
              </FlexItem>
            </Flex>
          </Card>
        );
      case "skill-cards":
        return (
          <Card className="skill-chat-cards">
            {skillArr.map((val) => {
              return (
                <div className="skill-chat-card">
                  <CardMedia className="card-media" image={val.src} />
                  <CardTitle>{val.title}</CardTitle>
                </div>
              );
            })}
          </Card>
        );
      case "order-selector":
        return <OrderSelector />;
      case "image":
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        );
      default:
        return null;
    }
  }

  return (
    <DemoPage>
      <div style={{ height: "calc(100vh - 48px)" }}>
        <Chat
          onRefresh={handleRefresh}
          navbar={{
            leftContent: {
              icon: "chevron-left",
              title: "Back",
            },
            rightContent: [
              {
                icon: "apps",
                title: "Applications",
              },
              {
                icon: "ellipsis-h",
                title: "More",
              },
            ],
            title: "智能客服",
          }}
          rightAction={{
            icon: "compass",
            onClick: (e) => {
              navigate("/suggestion");
            },
          }}
          toolbar={toolbar}
          messagesRef={msgRef}
          onToolbarClick={handleToolbarClick}
          recorder={{ canRecord: true }}
          wideBreakpoint="600px"
          messages={messages}
          renderMessageContent={renderMessageContent}
          quickReplies={quickReplies}
          onQuickReplyClick={handleQuickReplyClick}
          onSend={handleSend}
          onImageSend={() => Promise.resolve()}
        />
      </div>
    </DemoPage>
  );
};
