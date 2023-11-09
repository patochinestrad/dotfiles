return {
  colorscheme = "catppuccin",

  plugins = {
    "AstroNvim/astrocommunity",
    { import = "astrocommunity.colorscheme.catppuccin" },
    -- ... import any community contributed plugins here
    { import = "astrocommunity.completion.copilot-lua" },
  { -- further customize the options set by the community
    "zbirenbaum/copilot.lua",
    opts = {
      suggestion = {
        keymap = {
          accept = "<C-l>",
          accept_word = false,
          accept_line = false,
          next = "<C-.>",
          prev = "<C-,>",
          dismiss = "<C/>",
        },
      },
    },
  },  },
  {
    "lambdalisue/suda.vim"
  },
  {
    "alaviss/nim.nvim"
  },
}
