json.tag do
    json.set! @tag.id do
        json.partial! 'api/tags/tag', tag: @tag
    end
end