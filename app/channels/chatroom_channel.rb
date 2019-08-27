class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end
  def speak(data)
    message = Message.create(body: data['message'])
    socket = { message: message.body }
    ChatroomChannel.broadcast_to('chat_channel', socket)
  end
    def load
    messages = Message.all.collect(&:body)
    socket = { messages: messages, type: 'messages' }
    ChatroomChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed; end
end